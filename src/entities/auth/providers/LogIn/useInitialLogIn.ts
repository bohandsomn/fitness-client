import { useMemo } from 'react'
import { ILogInOptimizedContext } from './type'

export const useInitialLogIn = (): ILogInOptimizedContext => {
    return useMemo(() => ({
        email: '',
        password: '',
    }), [])
}