import { ISODate } from './type'

export function isoDateAdapter(date: Date): ISODate {
    return date.toISOString() as ISODate
}