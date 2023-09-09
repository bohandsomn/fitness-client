import { useAppTheme, PageNames, usePageNavigation } from '@/shared'

export const useNavigationLink = (routeProps: PageNames) => {
    const { colors } = useAppTheme()
    const pageNavigation = usePageNavigation()
    const currentRoute = pageNavigation.pageName
    const isCurrent = currentRoute === routeProps
    const currentColor = colors.primary
    const defaultColor = colors.disable
    const textColor = isCurrent ? currentColor : defaultColor
    return {
        textColor,
    }
}