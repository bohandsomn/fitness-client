import { ISODate } from '@/shared/lib'
import { QueryDto } from '@/shared/network'

export class GetUserHistoryQueryDto implements QueryDto {
    constructor(
        public readonly date: ISODate,
    ) { }
    [x: string]: string | number | null | undefined
}