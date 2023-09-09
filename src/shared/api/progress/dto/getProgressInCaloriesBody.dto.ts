import { ISODate } from '@/shared/lib'
import { QueryDto } from '@/shared/network'

export class GetProgressInCaloriesBodyDTO implements QueryDto {
    constructor(
        public readonly startDate: ISODate,
        public readonly endDate: ISODate,
    ) { }
    [x: string]: string | number | null | undefined
}