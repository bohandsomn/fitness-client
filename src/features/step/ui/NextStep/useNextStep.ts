import { useCallback } from 'react'
import { useStepStateSelector, useStepStateUpdate } from '@/entities'
import { StepConst } from '@/shared'

export const useNextStep = () => {
    const { step, maxStep } = useStepStateSelector((state) => state)
    const isEnd = step >= maxStep
    const { incrementStep } = useStepStateUpdate()
    const handlePress = useCallback(() => {
        incrementStep()
    }, [incrementStep])
    const defaultChildren = StepConst.NEXT_STEP
    return {
        handlePress,
        isEnd,
        defaultChildren,
    }
}