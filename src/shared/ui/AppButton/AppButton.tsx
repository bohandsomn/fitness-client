import { FC } from 'react'
import { Button, Text } from 'native-base'
import { IAppButton } from './type'
import { useAppButton } from './useAppButton'

export const AppButton: FC<IAppButton> = ({
    children,
    isDark = false,
    isWide = false,
    ...props
}) => {
    const {} = useAppButton()
    return (
        <Button
            backgroundColor={isDark ? 'black' : 'white'}
            alignSelf={isWide ? null : 'flex-start'}
            borderWidth={isDark ? null : 1}
            borderStyle={isDark ? null : 'solid'}
            {...props}
        >
            <Text color={isDark ? 'white' : 'black'}>{children}</Text>
        </Button>
    )
}
