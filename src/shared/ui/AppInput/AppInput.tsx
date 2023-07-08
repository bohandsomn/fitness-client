import { FC } from 'react'
import { Input, List, Text, View } from 'native-base'
import { IAppInputProps } from './type'
import { useAppInput } from './useAppInput'

export const AppInput: FC<IAppInputProps> = ({ rules, ...props }) => {
    const { errors } = useAppInput({ rules })
    return (
        <View>
            <Input
                placeholderTextColor="#49454F"
                fontSize="16"
                paddingLeft="4"
                paddingTop="2"
                paddingBottom="2"
                {...props}
            />
            {errors?.length ? (
                <List>
                    {errors.map((error) => (
                        <Text color="red.400" key={error}>
                            {error}
                        </Text>
                    )) || <></>}
                </List>
            ) : undefined}
        </View>
    )
}
