import { useMemo } from 'react'
import { ICreateUserOptimizedContext } from './type'

export const useInitialCreateUser = (): ICreateUserOptimizedContext => {
    return useMemo(() => ({
        name: null,
        email: null,
        difficulty: null,
        height: null,
        weight: null,
        goalWeight: null,
        goalDate: null,
        gender: null,
        birthday: null,
        password: null,
        confirmPassword: null,
    }), [])
}