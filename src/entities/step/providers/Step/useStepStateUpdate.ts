import { useCallback } from 'react'
import { useStateUpdate } from './context'
import { IUseStepStateUpdateResult } from './type'

export const useStepStateUpdate = (): IUseStepStateUpdateResult => {
    const update = useStateUpdate()
    const incrementStep = useCallback(() => {
        update((previous) => {
            const step = previous.step
            const maxStep = previous.maxStep
            if (step >= maxStep) {
                return previous
            }
            return {
                step: previous.step + 1
            }
        })
    }, [update])
    const decrementStep = useCallback(() => {
        update((previous) => {
            const step = previous.step
            const minStep = previous.minStep
            if (step <= minStep) {
                return previous
            }
            return {
                step: previous.step - 1
            }
        })
    }, [update])
    const setStep = useCallback((step: number) => {
        update({ step })
    }, [update])
    return {
        incrementStep,
        decrementStep,
        setStep,
    }
}