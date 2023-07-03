import { INetworkHttpInput } from './input'

export interface INetworkHttp {
    get<Dto, Response>(input: INetworkHttpInput<Dto>): Promise<Response>
    post<Dto, Response>(input: INetworkHttpInput<Dto>): Promise<Response>
    put<Dto, Response>(input: INetworkHttpInput<Dto>): Promise<Response>
    delete<Dto, Response>(input: INetworkHttpInput<Dto>): Promise<Response>
    patch<Dto, Response>(input: INetworkHttpInput<Dto>): Promise<Response>
}