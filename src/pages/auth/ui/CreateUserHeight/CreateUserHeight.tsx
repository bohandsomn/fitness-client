import { FC } from 'react'
import { Text, View } from 'native-base'
import { ICreateUserHeightProps } from './type'
import { useCreateUserHeight } from './useCreateUserHeight'

export const CreateUserHeight: FC<ICreateUserHeightProps> = ({ children }) => {
    const {} = useCreateUserHeight()
    return (
        <View>
            <Text>CreateUserHeight</Text>
            {children}
        </View>
    )
}
