import { AppDate } from '@/shared'
import { IGetDayIntervalResult } from './type'

export function getDayInterval(date: Date): IGetDayIntervalResult {
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const startDate = new AppDate(year, month, day, 0, 0, 0)
    const endDate = new AppDate(year, month, day, 23, 59, 59)
    return {
        startDate,
        endDate,
    }
}