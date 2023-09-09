import { FC } from 'react'
import { AppCalendar } from '@/shared'
import { IProgressCalendarProps } from './type'
import { useProgressCalendar } from './useProgressCalendar'

export const ProgressCalendar: FC<IProgressCalendarProps> = () => {
    const { currentDate, onChangeCurrentDate, minDate, maxDate } =
        useProgressCalendar()
    return (
        <AppCalendar
            currentDate={currentDate}
            onChangeCurrentDate={onChangeCurrentDate}
            minDate={minDate}
            maxDate={maxDate}
        />
    )
}
