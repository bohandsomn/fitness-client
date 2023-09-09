import { useCallback, useEffect } from 'react'
import { useLogInStateSelector, useLogInStateUpdate, useUserModel } from '@/entities'
import { AuthConst, IEventPreventDefault, PageNames, useAppNavigation } from '@/shared'

export const useLogInSubmit = () => {
    const { email, password } = useLogInStateSelector((state) => state)
    const { user, logInUser } = useUserModel()
    const navigation = useAppNavigation()
    const { resetEmail, resetPassword } = useLogInStateUpdate()
    const handleSubmit = useCallback((event: IEventPreventDefault) => {
        event.preventDefault()
        logInUser({ email, password })
    }, [email, password, logInUser])
    useEffect(() => {
        if (user.data === null || user.isLoading) {
            return
        }
        navigation.goTo(PageNames.TRAININGS)
        resetEmail()
        resetPassword()
    }, [user, resetEmail, resetPassword])
    const header = AuthConst.LOG_IN
    return {
        handleSubmit,
        header,
    }
}