import { FC } from 'react'
import { Text, View } from 'native-base'
import { ICreateUserPasswordProps } from './type'
import { useCreateUserPassword } from './useCreateUserPassword'

export const CreateUserPassword: FC<ICreateUserPasswordProps> = ({ children }) => {
    const {} = useCreateUserPassword()
    return (
        <View>
            <Text>CreateUserPassword</Text>
            {children}
        </View>
    )
}
