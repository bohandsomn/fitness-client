import { useMemo } from 'react'
import { ILostCaloriesOptimizedContext } from './type'

export const useInitialLostCalories = (): ILostCaloriesOptimizedContext => {
    return useMemo(() => ({
        data: null,
        previous: null,
        isLoading: true,
        error: null,
    }), [])
}