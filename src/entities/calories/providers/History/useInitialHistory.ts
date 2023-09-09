import { useMemo } from 'react'
import { IHistoryOptimizedContext } from './type'

export const useInitialHistory = (): IHistoryOptimizedContext => {
    return useMemo(() => ({
        data: null,
        previous: null,
        isLoading: true,
        error: null,
    }), [])
}