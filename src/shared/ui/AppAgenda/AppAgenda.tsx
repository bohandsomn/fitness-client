import { FC } from 'react'
import { View } from 'native-base'
import { Agenda } from 'react-native-calendars'
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
    const { onDayPress, theme, markedDates, items } = useAppAgenda({
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
                items={items}
                renderItem={() => <>{children}</>}
                renderDay={() => <></>}
            />
        </View>
    )
}
