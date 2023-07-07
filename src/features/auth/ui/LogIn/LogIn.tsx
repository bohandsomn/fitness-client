import { FC } from 'react'
import { Text } from 'native-base'
import { AppButton, AuthConst } from '@/shared'
import { ILogInProps } from './type'
import { useLogIn } from './useLogIn'

export const LogIn: FC<ILogInProps> = () => {
    const { handlePress } = useLogIn()
    return (
        <AppButton isWide isDark onPress={handlePress}>
            <Text>{AuthConst.LOG_IN}</Text>
        </AppButton>
    )
}
