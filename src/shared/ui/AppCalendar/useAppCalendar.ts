import { useCallback, useMemo } from 'react'
import { DateData } from 'react-native-calendars'
import { MarkedDates, Theme } from 'react-native-calendars/src/types'
import { isoDateAdapter } from '@/shared'
import { IAppCalendarProps } from './type'

export const useAppCalendar = ({
    onChangeCurrentDate,
    currentDate,
}: Pick<IAppCalendarProps, 'onChangeCurrentDate' | 'currentDate'>) => {
    const onDayPress = useCallback((date: DateData) => {
        return onChangeCurrentDate(isoDateAdapter(new Date(date.year, date.month, date.day)))
    }, [onChangeCurrentDate])
    const theme: Theme = useMemo(() => ({
        todayTextColor: 'black',
        calendarBackground: '#D9D9D9',
        backgroundColor: '#D9D9D9',
        dayTextColor: 'black',
        selectedDayTextColor: 'white',
        monthTextColor: 'black',
        selectedDayBackgroundColor: 'black',
        arrowColor: 'black',
        dotColor: 'black',
        selectedDotColor: 'white',
        textDayFontWeight: '500',
        textMonthFontWeight: '500',
        textDisabledColor: '#5F5F5F',
        textDayFontSize: 16,
        textMonthFontSize: 16,
    }), [])
    const markedDates: MarkedDates = useMemo(() => ({
        [currentDate]: {
            selected: true,
        },
        [isoDateAdapter(new Date())]: {
            today: true,
        },
    }), [currentDate])
    const style = useMemo(() => ({
        borderRadius: 28,
        height: 375,
    }), [])
    return {
        onDayPress,
        theme,
        markedDates,
        style,
    }
}