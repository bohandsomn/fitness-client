import { useAppTheme } from '../lib'

export const useAppInput = () => {
    const { colors } = useAppTheme()
    const textColor = colors.primary
    const backgroundColor = colors.white
    const placeholderColor = colors.tertiary
    return {
        textColor,
        backgroundColor,
        placeholderColor,
    }
}