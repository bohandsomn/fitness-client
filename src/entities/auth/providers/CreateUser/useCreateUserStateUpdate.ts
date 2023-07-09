import { useCallback } from 'react'
import { UserDifficulty, UserGender } from '@/shared'
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
        update({ email })
    }, [update])
    const changePassword = useCallback((password: string) => {
        update({ password })
    }, [update])
    const changeConfirmPassword = useCallback((confirmPassword: string) => {
        update({ confirmPassword })
    }, [update])
    const selectDifficulty = useCallback((difficulty: UserDifficulty) => {
        update({ difficulty })
    }, [update])
    const changeWeight = useCallback((weight: number) => {
        update({ weight })
    }, [update])
    const changeGoalWeight = useCallback((weight: number) => {
        update({ weight })
    }, [update])
    const changeHeight = useCallback((height: number) => {
        update({ height })
    }, [update])
    const changeGoalDate = useCallback((goalDate: Date) => {
        update({ goalDate })
    }, [update])
    const changeBirthday = useCallback((birthday: Date) => {
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