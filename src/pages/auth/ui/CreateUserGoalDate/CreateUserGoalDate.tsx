import { FC } from 'react'
import { Text, View } from 'native-base'
import { ICreateUserGoalDateProps } from './type'
import { useCreateUserGoalDate } from './useCreateUserGoalDate'

export const CreateUserGoalDate: FC<ICreateUserGoalDateProps> = ({ children }) => {
    const {} = useCreateUserGoalDate()
    return (
        <View>
            <Text>CreateUserGoalDate</Text>
            {children}
        </View>
    )
}
