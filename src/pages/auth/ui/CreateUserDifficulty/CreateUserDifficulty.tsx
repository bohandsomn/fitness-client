import { FC } from 'react'
import { Text, View } from 'native-base'
import { ICreateUserDifficultyProps } from './type'
import { useCreateUserDifficulty } from './useCreateUserDifficulty'

export const CreateUserDifficulty: FC<ICreateUserDifficultyProps> = ({ children }) => {
    const {} = useCreateUserDifficulty()
    return (
        <View>
            <Text>CreateUserDifficulty</Text>
            {children}
        </View>
    )
}
