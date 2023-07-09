import { useMemo } from 'react'
import { CreateUserQueue } from '@/pages'
import { IStepOptimizedContext } from '@/entities'

export const useCreateUser = () => {
    const stepInitialData = useMemo((): IStepOptimizedContext => ({
        step: CreateUserQueue.SELECT_GENDER,
        minStep: CreateUserQueue.SELECT_GENDER,
        maxStep: CreateUserQueue.ENTER_BIRTHDAY,
    }), [])
    return {
        stepInitialData,
    }
}