import { FC } from 'react'
import { AppCalendar } from '@/shared'
import { IBirthDateCalendarProps } from './type'
import { useBirthDateCalendar } from './useBirthDateCalendar'

export const BirthDateCalendar: FC<IBirthDateCalendarProps> = () => {
    const { birthday, changeBirthday, maxDate, minDate } =
        useBirthDateCalendar()
    return (
        <AppCalendar
            currentDate={birthday}
            onChangeCurrentDate={changeBirthday}
            maxDate={maxDate}
            minDate={minDate}
        />
    )
}
