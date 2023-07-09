import { FC } from 'react'
import { Text, View } from 'native-base'
import { ICreateUserBirthdayProps } from './type'
import { useCreateUserBirthday } from './useCreateUserBirthday'

export const CreateUserBirthday: FC<ICreateUserBirthdayProps> = ({ children }) => {
    const {} = useCreateUserBirthday()
    return (
        <View>
            <Text>CreateUserBirthday</Text>
            {children}
        </View>
    )
}
