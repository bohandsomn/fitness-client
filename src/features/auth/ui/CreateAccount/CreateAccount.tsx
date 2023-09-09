import { FC } from 'react'
import { Text } from 'native-base'
import { AppButton } from '@/shared'
import { ICreateAccountProps } from './type'
import { useCreateAccount } from './useCreateAccount'

export const CreateAccount: FC<ICreateAccountProps> = () => {
    const { handlePress, header } = useCreateAccount()
    return (
        <AppButton isWide onPress={handlePress}>
            <Text>{header}</Text>
        </AppButton>
    )
}
