import { useCallback, useEffect } from 'react'
import { logInUserAction, useAppDispatch, useAppSelector, useLogInStateSelector, useLogInStateUpdate } from '@/entities'
import { IEventPreventDefault, PageNames, useNavigation } from '@/shared'

export const useLogInSubmit = () => {
    const { email, password } = useLogInStateSelector((state) => state)
    const user = useAppSelector((state) => state.user)
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    const { resetEmail, resetPassword } = useLogInStateUpdate()
    const handleSubmit = useCallback((event: IEventPreventDefault) => {
        event.preventDefault()
        dispatch(logInUserAction({ email, password }))
    }, [dispatch, email, password])
    useEffect(() => {
        if (user.data === null || user.isLoading) {
            return
        }
        navigation.goTo(PageNames.HOME)
        resetEmail()
        resetPassword()
    }, [user, resetEmail, resetPassword])
    return {
        handleSubmit,
    }
}