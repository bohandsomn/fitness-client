import { FC } from 'react'
import { View } from 'native-base'
import { AuthConst } from '@/shared'
import { IEnterPasswordAndConfirmProps } from './type'
import { useEnterPasswordAndConfirm } from './useEnterPasswordAndConfirm'
import { CreateUserContainer } from '../CreateUserContainer'

export const EnterPasswordAndConfirm: FC<IEnterPasswordAndConfirmProps> = ({
    passwordField,
    confirmField,
}) => {
    const { header } = useEnterPasswordAndConfirm()
    return (
        <CreateUserContainer header={header}>
            <View marginTop="16px">{passwordField}</View>
            <View marginTop="16px" marginBottom="254px">
                {confirmField}
            </View>
        </CreateUserContainer>
    )
}
