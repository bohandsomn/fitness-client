import { useCallback } from 'react'
import { useStepStateSelector, useStepStateUpdate } from '@/entities'

export const useNextStep = () => {
    const { step, maxStep } = useStepStateSelector((state) => state)
    const isEnd = step >= maxStep
    const { incrementStep } = useStepStateUpdate()
    const handlePress = useCallback(() => {
        incrementStep()
    }, [incrementStep])
    return {
        handlePress,
        isEnd,
    }
}