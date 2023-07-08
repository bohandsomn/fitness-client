import { PropsWithChildren } from 'react'

export interface IStepOptimizedContext {
    step: number
    minStep: number
    maxStep: number
}

export interface IUseStepStateUpdateResult {
    incrementStep(): void
    decrementStep(): void
    setStep(step: number): void
}

export interface IStepProviderProps extends PropsWithChildren {
    data?: Partial<IStepOptimizedContext>
}