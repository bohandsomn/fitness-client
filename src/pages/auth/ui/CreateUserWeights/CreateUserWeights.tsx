import { FC } from 'react'
import { Text, View } from 'native-base'
import { ICreateUserWeightsProps } from './type'
import { useCreateUserWeights } from './useCreateUserWeights'

export const CreateUserWeights: FC<ICreateUserWeightsProps> = ({ children }) => {
    const {} = useCreateUserWeights()
    return (
        <View>
            <Text>CreateUserWeights</Text>
            {children}
        </View>
    )
}
