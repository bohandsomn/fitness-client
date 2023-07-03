import { combinePath } from '../combinePath'
import { getQuery } from '../getQuery'
import { IGetUrlDto } from './type'

export function getUrl(dto: IGetUrlDto): string {
    const relativePath = Array.isArray(dto.relativePath)
        ? combinePath({ paths: dto.relativePath })
        : dto.relativePath
    const query = dto.query
        ? getQuery(dto.query)
        : ''
    const url = relativePath + query
    return url
}