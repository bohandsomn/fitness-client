import { useCallback } from 'react'
import { useStateUpdate } from './context'
import { IUseLogInStateUpdateResult } from './type'

export const useLogInStateUpdate = (): IUseLogInStateUpdateResult => {
    const update = useStateUpdate()
    const changeEmail = useCallback((email: string) => {
        update({ email })
    }, [update])
    const changePassword = useCallback((password: string) => {
        update({ password })
    }, [update])
    const resetEmail = useCallback(() => {
        update({ email: '' })
    }, [update])
    const resetPassword = useCallback(() => {
        update({ password: '' })
    }, [update])
    return {
        changeEmail,
        changePassword,
        resetEmail,
        resetPassword,
    }
}