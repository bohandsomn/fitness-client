import { FC } from 'react'
import { Button, Text, View } from 'native-base'
import { IAppSecondaryButtonProps } from './type'
import { useAppSecondaryButton } from './useAppSecondaryButton'

export const AppSecondaryButton: FC<IAppSecondaryButtonProps> = ({
    children,
    leftInnerIcon,
    isWide = false,
    ...props
}) => {
    const { textColor, backgroundColor, alignSelf } =
        useAppSecondaryButton(isWide)
    return (
        <View
            bgColor={backgroundColor}
            padding="16px"
            borderRadius="12px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            alignSelf={alignSelf}
            justifyContent="center"
            {...props}
        >
            {leftInnerIcon && <View marginRight="12px">{leftInnerIcon}</View>}
            <Button padding="0">
                <Text color={textColor}>{children}</Text>
            </Button>
        </View>
    )
}
