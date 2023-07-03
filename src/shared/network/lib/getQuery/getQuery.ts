import { QueryDto } from './type'

export function getQuery(dto: QueryDto): string {
    const keys = Object.keys(dto)
    const query = '?' + keys
        .map((key) => `${key}=${dto[key]}`)
        .join('&')
    return query
}