import { FC } from 'react'
import { Text, View } from 'native-base'
import { Agenda, CalendarList } from 'react-native-calendars'
import { IAppAgendaProps } from './type'
import { useAppAgenda } from './useAppAgenda'

export const AppAgenda: FC<IAppAgendaProps> = ({
    currentDate,
    onChangeCurrentDate,
    minDate,
    maxDate,
    customHeader,
    children,
}) => {
    const { onDayPress, theme, markedDates } = useAppAgenda({
        currentDate,
        onChangeCurrentDate,
    })
    return (
        <View style={{ height: 600 }}>
            <Agenda
                current={currentDate}
                onDayPress={onDayPress}
                markedDates={markedDates}
                minDate={minDate}
                maxDate={maxDate}
                customHeader={customHeader}
                theme={theme}
                items={{ [currentDate]: [{}] as any }}
                renderItem={() => <>{children}</>}
                renderDay={() => <></>}
            />
        </View>
    )
}
