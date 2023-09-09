import { ICombinePathDto } from './type'

export function combinePath(dto: ICombinePathDto): string {
    return dto.paths
        .filter((path): path is string => !!path)
        .join('/')
}