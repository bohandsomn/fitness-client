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
    const {
        backgroundColor,
        textColor,
        alignSelf,
        borderWidth,
        borderStyle,
        paddingX,
        paddingY,
    } = useAppButton(isDark, isWide)
    return (
        <Button
            backgroundColor={backgroundColor}
            alignSelf={alignSelf}
            borderWidth={borderWidth}
            borderStyle={borderStyle}
            paddingTop={paddingY}
            paddingBottom={paddingY}
            paddingLeft={paddingX}
            paddingRight={paddingX}
            {...props}
        >
            <Text color={textColor}>{children}</Text>
        </Button>
    )
}
