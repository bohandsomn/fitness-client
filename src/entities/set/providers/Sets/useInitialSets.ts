import { useMemo } from 'react'
import { ISetsOptimizedContext } from './type'

export const useInitialSets = (): ISetsOptimizedContext => {
    return useMemo(() => ({
        data: null,
        previous: null,
        isLoading: true,
        error: null,
    }), [])
}