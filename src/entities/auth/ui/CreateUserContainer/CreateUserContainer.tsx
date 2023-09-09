import { FC } from 'react'
import { Center, Text, View } from 'native-base'
import { ICreateUserContainerProps } from './type'
import { useCreateUserContainer } from './useCreateUserContainer'

export const CreateUserContainer: FC<ICreateUserContainerProps> = ({
    children,
    header,
}) => {
    const {} = useCreateUserContainer()
    return (
        <View margin="42px" marginBottom="auto">
            <Center>
                <Text bold fontSize="16px">
                    {header}
                </Text>
            </Center>
            {children}
        </View>
    )
}
