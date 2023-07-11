import { useCallback, useMemo } from 'react'
import { DateData } from 'react-native-calendars'
import { MarkedDates, Theme } from 'react-native-calendars/src/types'
import { IAppAgendaProps } from './type'
import { localeDateAdapter } from '../../lib'

export const useAppAgenda = ({
    onChangeCurrentDate,
    currentDate,
}: Pick<IAppAgendaProps, 'onChangeCurrentDate' | 'currentDate'>) => {
    const onDayPress = useCallback((date: DateData) => {
        return onChangeCurrentDate(localeDateAdapter(new Date(date.year, date.month, date.day)))
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
        [localeDateAdapter(new Date())]: {
            today: true,
        },
    }), [currentDate])
    return {
        onDayPress,
        theme,
        markedDates,
    }
}