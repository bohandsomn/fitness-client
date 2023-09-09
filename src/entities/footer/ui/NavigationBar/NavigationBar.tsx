import { FC } from 'react'
import { View } from 'native-base'
import { INavigationBarProps } from './type'
import { useNavigationBar } from './useNavigationBar'

export const NavigationBar: FC<INavigationBarProps> = ({
    trainings,
    discover,
    account,
}) => {
    const { bgColor } = useNavigationBar()
    return (
        <View
            bgColor={bgColor}
            flexDirection="row"
            justifyContent="space-around"
            padding="16px"
        >
            <View>{trainings}</View>
            <View>{discover}</View>
            <View>{account}</View>
        </View>
    )
}
