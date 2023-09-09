import { useAppTheme } from '../lib'

export const useAppSecondaryButton = (isWide: boolean) => {
    const { colors } = useAppTheme()
    const textColor = colors.primary
    const backgroundColor = colors.secondary
    const alignSelf = isWide ? undefined : 'flex-start'
    return {
        textColor,
        backgroundColor,
        alignSelf,
    }
}