import { QueryDto } from './type'

export function getQuery(dto: QueryDto): string {
    const keys = Object.keys(dto)
    const query = '?' + keys
        .map((key) => [key, dto[key]] as const)
        .filter((entity): entity is [string, string | number] => typeof entity[1] === 'number' || !!entity[1])
        .map(([key, value]) => `${key}=${value}`)
        .join('&')
    return query
}