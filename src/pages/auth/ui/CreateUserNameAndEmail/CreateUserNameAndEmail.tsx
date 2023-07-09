import { FC } from 'react'
import { Text, View } from 'native-base'
import { ICreateUserNameAndEmailProps } from './type'
import { useCreateUserNameAndEmail } from './useCreateUserNameAndEmail'

export const CreateUserNameAndEmail: FC<ICreateUserNameAndEmailProps> = ({ children }) => {
    const {} = useCreateUserNameAndEmail()
    return (
        <View>
            <Text>CreateUserNameAndEmail</Text>
            {children}
        </View>
    )
}
