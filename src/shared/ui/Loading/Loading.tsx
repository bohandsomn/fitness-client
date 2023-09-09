import { FC } from 'react'
import { HStack, Spinner, Text } from 'native-base'
import { ILoadingProps } from './type'
import { useLoading } from './useLoading'

export const Loading: FC<ILoadingProps> = ({
    header = 'Loading...',
    isDark = false,
}) => {
    const { textColor } = useLoading(isDark)
    return (
        <HStack space={2} justifyContent="center">
            <Spinner />
            <Text color={textColor}>{header}</Text>
        </HStack>
    )
}
