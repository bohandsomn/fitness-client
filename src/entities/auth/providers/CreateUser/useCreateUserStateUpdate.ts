import { useCallback } from 'react'
import { ISODate, UserDifficulty, UserGender } from '@/shared'
import { useStateUpdate } from './context'
import { IUseCreateUserStateUpdateResult } from './type'

export const useCreateUserStateUpdate = (): IUseCreateUserStateUpdateResult => {
    const update = useStateUpdate()
    const selectGender = useCallback((gender: UserGender) => {
        update({ gender })
    }, [update])
    const changeName = useCallback((name: string) => {
        update({ name })
    }, [update])
    const changeEmail = useCallback((email: string) => {
        update({ email: email.trim() })
    }, [update])
    const changePassword = useCallback((password: string) => {
        update({ password: password.trim() })
    }, [update])
    const changeConfirmPassword = useCallback((confirmPassword: string) => {
        update({ confirmPassword: confirmPassword.trim() })
    }, [update])
    const selectDifficulty = useCallback((difficulty: UserDifficulty) => {
        update({ difficulty })
    }, [update])
    const changeWeight = useCallback((weight: number) => {
        update({ weight })
    }, [update])
    const changeGoalWeight = useCallback((goalWeight: number) => {
        update({ goalWeight })
    }, [update])
    const changeHeight = useCallback((height: number) => {
        update({ height })
    }, [update])
    const changeGoalDate = useCallback((goalDate: ISODate) => {
        update({ goalDate })
    }, [update])
    const changeBirthday = useCallback((birthday: ISODate) => {
        update({ birthday })
    }, [update])
    return {
        selectGender,
        changeName,
        changeEmail,
        changePassword,
        changeConfirmPassword,
        selectDifficulty,
        changeWeight,
        changeGoalWeight,
        changeHeight,
        changeGoalDate,
        changeBirthday,
    }
}