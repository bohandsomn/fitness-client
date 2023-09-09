import { useCallback } from 'react'
import { useStepStateSelector, useStepStateUpdate } from '@/entities'
import { StepConst } from '@/shared'

export const usePreviousStep = () => {
    const { step, minStep } = useStepStateSelector((state) => state)
    const isStart = step <= minStep
    const { decrementStep } = useStepStateUpdate()
    const handlePress = useCallback(() => {
        decrementStep()
    }, [decrementStep])
    const defaultChildren = StepConst.PREVIOUS_STEP
    return {
        handlePress,
        isStart,
        defaultChildren,
    }
}