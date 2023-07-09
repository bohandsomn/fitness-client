import { useCallback } from 'react'
import { useStepStateSelector, useStepStateUpdate } from '@/entities'

export const usePreviousStep = () => {
    const { step, minStep } = useStepStateSelector((state) => state)
    const isStart = step <= minStep
    const { decrementStep } = useStepStateUpdate()
    const handlePress = useCallback(() => {
        decrementStep()
    }, [decrementStep])
    return {
        handlePress,
        isStart,
    }
}