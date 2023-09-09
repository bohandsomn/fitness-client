import { useMemo } from 'react'
import { IStepOptimizedContext } from './type'

export const useInitialStep = (data: Partial<IStepOptimizedContext>): IStepOptimizedContext => {
    return useMemo(() => ({
        step: 0,
        minStep: 0,
        maxStep: 99,
        ...data,
    }), [])
}