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
    height,
    children,
}) => {
    const {
        onDayPress,
        theme,
        markedDates,
        items,
        style,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderTopLeftRadius,
        borderTopRightRadius,
    } = useAppAgenda({
        currentDate,
        onChangeCurrentDate,
    })
    return (
        <View
            height={height}
            backgroundColor={theme.backgroundColor}
            borderBottomLeftRadius={borderBottomLeftRadius}
            borderBottomRightRadius={borderBottomRightRadius}
            borderTopLeftRadius={borderTopLeftRadius}
            borderTopRightRadius={borderTopRightRadius}
        >
            <View
                width="full"
                paddingTop="16px"
                paddingLeft="16px"
                paddingRight="16px"
            >
                {customHeader}
            </View>
            <Agenda
                current={currentDate}
                onDayPress={onDayPress}
                markedDates={markedDates}
                minDate={minDate}
                maxDate={maxDate}
                theme={theme}
                items={items}
                style={style}
                renderItem={() => (
                    <View backgroundColor={theme.backgroundColor}>
                        {children}
                    </View>
                )}
                renderDay={() => <></>}
            />
        </View>
    )
}
