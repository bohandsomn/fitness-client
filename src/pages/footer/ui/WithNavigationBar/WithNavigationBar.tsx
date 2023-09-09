import { FC } from 'react'
import { View } from 'native-base'
import { IWithNavigationBarProps } from './type'
import { useWithNavigationBar } from './useWithNavigationBar'
import { NavigationBar } from '@/widgets'

export const WithNavigationBar: FC<IWithNavigationBarProps> = ({
    children,
}) => {
    const {} = useWithNavigationBar()
    return (
        <View
            height="full"
            flexDirection="column"
            justifyContent="space-between"
        >
            <View>{children}</View>
            <NavigationBar />
        </View>
    )
}
