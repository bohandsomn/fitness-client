import { FC } from 'react'
import { Text, View, Input } from 'native-base'
import { withErrors } from '@/shared/lib'
import { IAppNumberInputProps } from './type'
import { useAppNumberInput } from './useAppNumberInput'

export const AppNumberInput: FC<IAppNumberInputProps> = withErrors(
    ({ rightText, value, onChangeText, max, min, ...props }) => {
        const { handleChange } = useAppNumberInput({ onChangeText, max, min })
        return (
            <Input
                value={value?.toString()}
                onChangeText={handleChange}
                backgroundColor="#E8E8E8"
                borderRadius="10px"
                placeholderTextColor="#A3A3A3"
                paddingTop="12px"
                paddingRight="0"
                paddingBottom="12px"
                paddingLeft="20px"
                fontSize="20px"
                fontWeight="400"
                alignSelf="flex-start"
                borderWidth={0}
                width="xs"
                rightElement={
                    rightText ? (
                        <View marginRight="20px">
                            <Text color="#6E6D70" fontSize="16px">
                                {rightText}
                            </Text>
                        </View>
                    ) : undefined
                }
                {...props}
            />
        )
    },
)
