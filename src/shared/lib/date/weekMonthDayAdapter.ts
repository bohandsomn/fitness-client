import { shortMonthNames, shortWeekNames } from '@/shared/const'

export function weekMonthDayAdapter(date: Date): `${string}, ${string} ${string}` {
    const day = date.getDate()
    const weekIndex = date.getDay()
    const week = shortWeekNames[weekIndex]
    const monthIndex = date.getMonth()
    const month = shortMonthNames[monthIndex]
    return `${week}, ${month} ${day}`
}