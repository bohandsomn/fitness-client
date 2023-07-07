import { FC } from 'react'
import { Text } from 'native-base'
import { AppButton, AuthConst } from '@/shared'
import { ICreateAccountProps } from './type'
import { useCreateAccount } from './useCreateAccount'

export const CreateAccount: FC<ICreateAccountProps> = () => {
    const { handlePress } = useCreateAccount()
    return (
        <AppButton isWide onPress={handlePress}>
            <Text>{AuthConst.CREATE_AN_ACCOUNT}</Text>
        </AppButton>
    )
}
