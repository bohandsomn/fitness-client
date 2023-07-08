import { useCallback } from 'react'
import { useStepStateUpdate } from '@/entities'

export const usePreviousStep = () => {
    const { decrementStep } = useStepStateUpdate()
    const handlePress = useCallback(() => {
        decrementStep()
    }, [decrementStep])
    return {
        handlePress
    }
}