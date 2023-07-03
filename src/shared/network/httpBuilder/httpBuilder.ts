import axios, { AxiosRequestConfig, ResponseType } from 'axios'
import { Http } from '../http'
import { combinePath } from '../lib'
import { IRefresher, Refresher } from '../refresher'
import { LocalStorage, tokenLocalStorage } from '../../storage'

export class HttpBuilder {
    private readonly http: Http
    private readonly refresher: IRefresher
    private baseURL?: string
    private relativePath?: string
    private sendCookies = false
    private sendAuthToken = false
    private headers?: Record<string, string>
    private validateStatus: NonNullable<AxiosRequestConfig['validateStatus']> = () => true
    private responseType: ResponseType = 'json'

    constructor() {
        this.http = new Http(axios.create())
        this.refresher = new Refresher(tokenLocalStorage)
    }

    setBaseURL(baseURL: string): HttpBuilder {
        this.baseURL = baseURL
        return this
    }

    setRelativePath(relativePath: string): HttpBuilder {
        this.relativePath = relativePath
        return this
    }

    setSendCookies(sendCookies: boolean): HttpBuilder {
        this.sendCookies = sendCookies
        return this
    }

    setSendAuthToken(sendAuthToken: boolean): HttpBuilder {
        this.sendAuthToken = sendAuthToken
        return this
    }

    setHeaders(headers: Record<string, string>): HttpBuilder {
        this.headers = headers
        return this
    }

    setValidateStatus(validateStatus: NonNullable<AxiosRequestConfig['validateStatus']>): HttpBuilder {
        this.validateStatus = (status) => validateStatus(status)
        return this
    }

    setResponseType(responseType: ResponseType): HttpBuilder {
        this.responseType = responseType
        return this
    }

    build(): Http {
        const fullPath = combinePath({
            paths: [this.baseURL, this.relativePath]
        })
        this.http.axiosInstance.defaults.baseURL = fullPath
        this.http.axiosInstance.defaults.withCredentials = this.sendCookies
        if (this.sendAuthToken) {
            this.http.axiosInstance.interceptors.request.use(
                (config) => this.refresher.requestOnFulfilled(config),
                (error) => this.refresher.requestOnRejected(error)
            )
            this.http.axiosInstance.interceptors.response.use(
                (config) => this.refresher.responseOnFulfilled(config),
                (error) => this.refresher.responseOnRejected(this.http.axiosInstance, error)
            )
            this.http.axiosInstance.defaults.validateStatus = (status) => status !== 401
        }
        this.http.axiosInstance.defaults.headers = {
            ...this.http.axiosInstance.defaults.headers,
            ...this.headers
        }
        this.http.axiosInstance.defaults.validateStatus = (status) => this.validateStatus(status)
        this.http.axiosInstance.defaults.responseType = this.responseType
        return this.http
    }
}