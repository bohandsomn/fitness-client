import { useCallback, useMemo } from 'react'
import { DateData } from 'react-native-calendars'
import { MarkedDates, Theme } from 'react-native-calendars/src/types'
import { IAppAgendaProps } from './type'
import { AppDate, localeDateAdapter } from '../../lib'
import { StyleProp, ViewStyle } from 'react-native'
import { useAppTheme } from '../lib'

export const useAppAgenda = ({
    onChangeCurrentDate,
    currentDate,
}: Pick<IAppAgendaProps, 'onChangeCurrentDate' | 'currentDate'>) => {
    const onDayPress = useCallback((date: DateData) => {
        return onChangeCurrentDate(localeDateAdapter(new AppDate(date.year, date.month - 1, date.day)))
    }, [onChangeCurrentDate])
    const { colors } = useAppTheme()
    const theme: Theme = useMemo(() => ({
        todayTextColor: colors.white,
        textDayFontFamily: 'Roboto',
        calendarBackground: colors.primary,
        backgroundColor: colors.primary,
        dayTextColor: colors.white,
        selectedDayTextColor: colors.primary,
        selectedDayBackgroundColor: colors.accent,
        monthTextColor: colors.white,
        arrowColor: colors.white,
        textDayFontWeight: 'normal',
        textMonthFontWeight: 'bold',
        textDisabledColor: colors.white,
        textDayFontSize: 16,
        textMonthFontSize: 14,
    }), [colors])
    const style: StyleProp<ViewStyle> = useMemo(() => ({
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    }), [])
    const markedDates: MarkedDates = useMemo(() => ({
        [currentDate]: {
            selected: true,
        },
        [localeDateAdapter(new AppDate())]: {
            today: true,
        },
    }), [currentDate])
    const items = useMemo(() => ({
        [currentDate]: [{}] as any
    }), [currentDate])
    const borderBottomLeftRadius = style.borderBottomLeftRadius
        ? `${style.borderBottomLeftRadius}px`
        : null
    const borderBottomRightRadius = style.borderBottomRightRadius
        ? `${style.borderBottomRightRadius}px`
        : null
    const borderTopLeftRadius = style.borderBottomLeftRadius
        ? `${style.borderBottomLeftRadius}px`
        : null
    const borderTopRightRadius = style.borderBottomRightRadius
        ? `${style.borderBottomRightRadius}px`
        : null
    return {
        onDayPress,
        theme,
        markedDates,
        items,
        style,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderTopLeftRadius,
        borderTopRightRadius,
    }
}