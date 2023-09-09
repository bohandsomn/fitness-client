import { FC } from 'react'
import { Text, View } from 'native-base'
import { IAccountProps } from './type'
import { useAccount } from './useAccount'
import { WithNavigationBar } from '@/pages/footer'

export const Account: FC<IAccountProps> = () => {
    const {} = useAccount()
    return (
        <WithNavigationBar>
            <View>
                <Text>Account</Text>
            </View>
        </WithNavigationBar>
    )
}
