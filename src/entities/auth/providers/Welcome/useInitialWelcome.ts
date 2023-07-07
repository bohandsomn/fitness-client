import { useMemo } from 'react'
import { IWelcomeOptimizedContext } from './type'

export const useInitialWelcome = (): IWelcomeOptimizedContext => {
    return useMemo(() => ({ isChecked: true }), [])
}