import { AxiosInstance } from 'axios'
import { INetworkHttpInput, INetworkHttp } from './type'
import { HttpMethod } from './method'
import { INetworkHttpJsonInput } from './type/jsonInput'
import { getUrl } from '../lib'

export class Http implements INetworkHttp {
    constructor(
        public readonly axiosInstance: AxiosInstance
    ) { }

    async get<Dto, Response>(input: INetworkHttpInput<Dto>): Promise<Response> {
        return this.json({
            ...input,
            method: HttpMethod.GET,
        })
    }

    async post<Dto, Response>(input: INetworkHttpInput<Dto>): Promise<Response> {
        return this.json({
            ...input,
            method: HttpMethod.POST,
        })
    }

    async put<Dto, Response>(input: INetworkHttpInput<Dto>): Promise<Response> {
        return this.json({
            ...input,
            method: HttpMethod.PUT,
        })
    }

    async patch<Dto, Response>(input: INetworkHttpInput<Dto>): Promise<Response> {
        return this.json({
            ...input,
            method: HttpMethod.PATCH,
        })
    }

    async delete<Dto, Response>(input: INetworkHttpInput<Dto>): Promise<Response> {
        return this.json({
            ...input,
            method: HttpMethod.DELETE,
        })
    }

    private async json<Dto, Response>(input: INetworkHttpJsonInput<Dto>): Promise<Response> {
        try {
            const relativePath = [
                this.axiosInstance.defaults.baseURL || '',
                ...Array.isArray(input.relativePath)
                    ? input.relativePath
                    : [input.relativePath]
            ]
            const url = getUrl({
                relativePath,
                query: input.query,
            })
            console.log(JSON.stringify({
                ...input,
                relativePath,
                url,
            }, null, 4))
            const response = await this.axiosInstance.request<Response>({
                method: input.method,
                data: input.body,
                url,
                headers: input.headers
            })
            if (response instanceof Error) {
                throw response
            }
            return response.data
        } catch (error) {
            console.log({ data: JSON.stringify(error, null, 4) })
            return error as Response
        }
    }
}