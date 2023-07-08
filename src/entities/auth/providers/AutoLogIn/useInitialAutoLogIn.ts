import { useEffect, useMemo } from 'react'
import { autoLogInUserAction, useAppDispatch, useAppSelector } from '@/entities'
import { PageNames, errorAdapter, useNavigation, useNotification, welcomeBooleanStorage } from '@/shared'
import { IAutoLogInOptimizedContext } from './type'

export const useInitialAutoLogIn = (): IAutoLogInOptimizedContext => {
    const user = useAppSelector((state) => state.user)
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    const notification = useNotification()

    useEffect(() => {
        const navigate = async () => {
            if (
                user.data !== null ||
                user.isLoading ||
                user.error === null
            ) {
                return
            }
            try {
                const value = await welcomeBooleanStorage.get()
                if (value === 'true') {
                    navigation.goTo(PageNames.LOG_IN)
                } else {
                    navigation.goTo(PageNames.WELCOME)
                }
            } catch (error) {
                welcomeBooleanStorage.save('false')
                navigation.goTo(PageNames.WELCOME)
            }
        }
        navigate()
    }, [user])

    useEffect(() => {
        dispatch(autoLogInUserAction())
    }, [])

    useEffect(() => {
        if (user.error) {
            const errors = errorAdapter({ message: user.error as any })
            const error = errors.join('\n\n')
            notification.fail(error, { duration: 5000 })
        }
    }, [user])

    return useMemo(() => ({}), [])
}