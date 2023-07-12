import { FC } from 'react'
import { Calendar } from 'react-native-calendars'
import { IAppCalendarProps } from './type'
import { useAppCalendar } from './useAppCalendar'

export const AppCalendar: FC<IAppCalendarProps> = ({
    currentDate,
    onChangeCurrentDate,
    minDate,
    maxDate,
    customHeader,
}) => {
    const { onDayPress, theme, markedDates, style } = useAppCalendar({
        onChangeCurrentDate,
        currentDate,
    })
    return (
        <Calendar
            current={currentDate}
            onDayPress={onDayPress}
            markedDates={markedDates}
            minDate={minDate}
            maxDate={maxDate}
            customHeader={customHeader}
            theme={theme}
            style={style}
        />
    )
}
