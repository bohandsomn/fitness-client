import { useEffect } from 'react'
import { useUserModel } from '@/entities'
import { NotificationType, PageNames, errorAdapter, useAppNavigation, useNotification, welcomeBooleanStorage } from '@/shared'

export const useInitialAutoLogIn = () => {
    const { user, autoLogInUser } = useUserModel()
    const navigation = useAppNavigation()
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
        autoLogInUser()
    }, [])

    useEffect(() => {
        if (user.error) {
            const errors = errorAdapter({ message: user.error as any })
            notification.broadcast(errors, { type: NotificationType.FAIL })
        }
    }, [user])
}