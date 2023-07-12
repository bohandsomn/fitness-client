import { FC } from 'react'
import { View } from 'native-base'
import { AuthConst } from '@/shared'
import { IEnterNameAndEmailProps } from './type'
import { useEnterNameAndEmail } from './useEnterNameAndEmail'
import { CreateUserContainer } from '../CreateUserContainer'

export const EnterNameAndEmail: FC<IEnterNameAndEmailProps> = ({
    nameField,
    emailField,
}) => {
    const {} = useEnterNameAndEmail()
    return (
        <CreateUserContainer header={AuthConst.ENTER_NAME_AND_EMAIL}>
            <View marginTop="16px">{nameField}</View>
            <View marginTop="16px">{emailField}</View>
        </CreateUserContainer>
    )
}
