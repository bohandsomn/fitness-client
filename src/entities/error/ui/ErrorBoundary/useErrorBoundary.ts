import { ErrorConst } from '@/shared'

export const useErrorBoundary = (isDark: boolean) => {
    const textColor = isDark ? 'white' : undefined
    const iconColorScheme = isDark ? 'white' : undefined
    const error = ErrorConst.SOMETHING_WENT_WRONG
    const reload = ErrorConst.TAP_TO_RELOAD
    const cancel = ErrorConst.DOUBLE_TAP_TO_CANCEL
    return {
        textColor,
        iconColorScheme,
        error,
        reload,
        cancel,
    }
}