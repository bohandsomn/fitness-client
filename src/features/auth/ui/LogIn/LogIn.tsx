import { FC } from 'react'
import { Text } from 'native-base'
import { AppButton } from '@/shared'
import { ILogInProps } from './type'
import { useLogIn } from './useLogIn'

export const LogIn: FC<ILogInProps> = () => {
    const { handlePress, header } = useLogIn()
    return (
        <AppButton isWide isDark onPress={handlePress}>
            <Text>{header}</Text>
        </AppButton>
    )
}
