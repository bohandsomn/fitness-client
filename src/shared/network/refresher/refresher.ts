import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { IRefresher } from './type'
import { combinePath } from '../lib'
import { apiUrl } from '../../config'
import { IStorage } from '../../storage'

export class Refresher implements IRefresher {
    private isRefreshed = false

    constructor(
        private readonly storage: IStorage<string>,
    ) { }

    private async refresh(): Promise<string | undefined> {
        this.isRefreshed = true
        const fullPath = combinePath({
            paths: [apiUrl, 'auth', 'refresh']
        })
        const axiosResponse = await axios.put(fullPath, {
            withCredentials: true,
            validateStatus: () => true,
        })
        const accessToken = axiosResponse?.data?.accessToken
        return accessToken
    }

    async requestOnFulfilled(config: InternalAxiosRequestConfig) {
        try {
            const token = await this.storage.get()
            config.headers.authorization = `Bearer ${token}`
            return config
        } catch (error) {
            return config
        }
    }

    async requestOnRejected(error: any) {
        return error
    }

    async responseOnFulfilled(config: AxiosResponse) {
        return config
    }

    async responseOnRejected(network: AxiosInstance, error: unknown) {
        console.log((error as AxiosError).toJSON())
        try {
            if (!(error instanceof AxiosError)) {
                throw error
            }
            const isNotUnauthorizedStatusCode = error.response?.status !== 401
            if (isNotUnauthorizedStatusCode || this.isRefreshed) {
                this.isRefreshed = false
                return error.response
            }
            const accessToken = await this.refresh()
            if (typeof accessToken === 'string') {
                await this.storage.save(accessToken)
            } else {
                await this.storage.delete()
            }
            try {
                await this.storage.get()
                if (error.config) {
                    return network.request(error.config)
                }
                return error.response
            } catch (error) { }
            return error.response
        } catch (caughtError) {
            return caughtError
        }
    }
}
