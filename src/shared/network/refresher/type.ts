import { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

export interface IRefresher {
    requestOnFulfilled(config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig>
    requestOnRejected(error: any): Promise<any>
    responseOnFulfilled(config: AxiosResponse): Promise<AxiosResponse>
    responseOnRejected(network: AxiosInstance, error: unknown): Promise<unknown>
}