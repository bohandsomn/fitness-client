import { useAppTheme } from '../lib'

export const useAppTextarea = () => {
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