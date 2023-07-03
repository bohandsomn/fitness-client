import { QueryDto } from '../../lib'
import { HttpMethod } from '../method'

export interface INetworkHttpJsonInput<Body> {
    readonly method: HttpMethod
    readonly body: Body
    readonly relativePath: string | string[]
    readonly headers?: Record<string, string>
    readonly query?: QueryDto
}