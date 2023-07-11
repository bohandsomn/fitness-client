import { useMemo } from 'react'
import { CreateUserQueue } from '@/pages'
import { IStepOptimizedContext } from '@/entities'

export const useCreateUser = () => {
    const stepInitialData = useMemo((): IStepOptimizedContext => ({
        step: CreateUserQueue.ENTER_NAME_AND_EMAIL,
        minStep: CreateUserQueue.ENTER_NAME_AND_EMAIL,
        maxStep: CreateUserQueue.ENTER_GOAL_DATE,
    }), [])
    return {
        stepInitialData,
    }
}