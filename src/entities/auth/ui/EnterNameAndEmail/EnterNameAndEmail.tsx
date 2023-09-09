import { FC } from 'react'
import { View } from 'native-base'
import { IEnterNameAndEmailProps } from './type'
import { useEnterNameAndEmail } from './useEnterNameAndEmail'
import { CreateUserContainer } from '../CreateUserContainer'

export const EnterNameAndEmail: FC<IEnterNameAndEmailProps> = ({
    nameField,
    emailField,
}) => {
    const { header } = useEnterNameAndEmail()
    return (
        <CreateUserContainer header={header}>
            <View marginTop="16px">{nameField}</View>
            <View marginTop="16px">{emailField}</View>
        </CreateUserContainer>
    )
}
