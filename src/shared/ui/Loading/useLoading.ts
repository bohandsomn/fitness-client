export const useLoading = (isDark: boolean) => {
    const textColor = isDark ? 'white' : undefined
    return {
        textColor,
    }
}