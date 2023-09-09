import { useAppTheme } from '../lib'

export const useAppButton = (isDark: boolean, isWide: boolean) => {
    const { colors } = useAppTheme()
    const backgroundColor = isDark ? colors.primary : colors.white as const
    const textColor = isDark ? colors.white : colors.black as const
    const alignSelf = isWide ? null : 'flex-start' as const
    const borderWidth = isDark ? null : 1 as const
    const borderStyle = isDark ? null : 'solid' as const
    const paddingX = isDark ? '24px' : '12px' as const
    const paddingY = '10px' as const
    return {
        backgroundColor,
        textColor,
        alignSelf,
        borderWidth,
        borderStyle,
        paddingX,
        paddingY,
    }
}