import { useAppTheme } from '@/shared'

export const useNavigationBar = () => {
    const { colors } = useAppTheme()
    const bgColor = colors.tertiary
    return {
        bgColor,
    }
}