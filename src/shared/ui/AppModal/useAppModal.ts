import { useAppTheme } from '../lib'

export const useAppModal = () => {
    const { colors } = useAppTheme()
    const backgroundColor = colors.white
    return {
        backgroundColor,
    }
}