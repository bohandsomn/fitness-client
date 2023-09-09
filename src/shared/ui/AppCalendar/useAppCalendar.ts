import { useCallback, useMemo } from 'react'
import { DateData } from 'react-native-calendars'
import { MarkedDates, Theme } from 'react-native-calendars/src/types'
import { AppDate, isoDateAdapter, localeDateAdapter, useAppTheme } from '@/shared'
import { IAppCalendarProps } from './type'

export const useAppCalendar = ({
    onChangeCurrentDate,
    currentDate,
}: Pick<IAppCalendarProps, 'onChangeCurrentDate' | 'currentDate'>) => {
    const onDayPress = useCallback((date: DateData) => {
        return onChangeCurrentDate(isoDateAdapter(new AppDate(date.year, date.month - 1, date.day)))
    }, [onChangeCurrentDate])
    const { colors } = useAppTheme()
    const theme = useMemo(() => ({
        todayTextColor: colors.black,
        todayBackgroundColor: colors.secondary,
        textDayFontFamily: 'Roboto',
        calendarBackground: colors.primary,
        backgroundColor: colors.primary,
        dayTextColor: colors.white,
        selectedDayTextColor: colors.primary,
        selectedDayBackground: colors.accent,
        selectedDayBackgroundColor: colors.accent,
        selectedDotColor: colors.accent,
        monthTextColor: colors.white,
        arrowColor: colors.white,
        textDayFontWeight: 'normal',
        textMonthFontWeight: 'bold',
        textDisabledColor: colors.disable,
        textDayFontSize: 16,
        textMonthFontSize: 14,
    }), [colors]) satisfies Theme
    const markedDates = useMemo(() => ({
        [localeDateAdapter(new AppDate(currentDate))]: {
            selected: true,
            selectedColor: colors.accent,
        },
        [localeDateAdapter(new AppDate())]: {
            today: true,
            selectedColor: colors.secondary,
        },
    }), [currentDate, colors]) satisfies MarkedDates
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