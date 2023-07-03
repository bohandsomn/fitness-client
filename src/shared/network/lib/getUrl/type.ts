import { QueryDto } from '../getQuery'

export interface IGetUrlDto {
    readonly relativePath: string | string[]
    readonly query?: QueryDto
}