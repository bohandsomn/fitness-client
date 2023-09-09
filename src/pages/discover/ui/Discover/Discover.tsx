import { FC } from 'react'
import { Text, View } from 'native-base'
import { IDiscoverProps } from './type'
import { useDiscover } from './useDiscover'
import { WithNavigationBar } from '@/pages/footer'

export const Discover: FC<IDiscoverProps> = () => {
    const {} = useDiscover()
    return (
        <WithNavigationBar>
            <View>
                <Text>Discover</Text>
            </View>
        </WithNavigationBar>
    )
}
