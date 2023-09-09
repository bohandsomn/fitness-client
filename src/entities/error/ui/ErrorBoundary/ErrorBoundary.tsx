import { FC, memo } from 'react'
import { CloseIcon, Text, View } from 'native-base'
import { IErrorBoundaryProps } from './type'
import { useErrorBoundary } from './useErrorBoundary'
import { ReloadIcon } from '@/shared'

export const ErrorBoundary: FC<IErrorBoundaryProps> = memo(
    ({ header, isDark = false }) => {
        const { textColor, iconColorScheme, error, reload, cancel } =
            useErrorBoundary(isDark)
        return (
            <View>
                <Text bold color={textColor}>
                    {error}
                </Text>
                {header ? <Text color={textColor}>{header}</Text> : null}
                <View display="flex" flexDirection="row">
                    <Text marginRight="5px" color={textColor}>
                        {reload}
                    </Text>
                    <ReloadIcon colorScheme={iconColorScheme} />
                </View>
                <View display="flex" flexDirection="row">
                    <Text marginRight="5px" color={textColor}>
                        {cancel}
                    </Text>
                    <CloseIcon colorScheme={iconColorScheme} />
                </View>
            </View>
        )
    },
)
