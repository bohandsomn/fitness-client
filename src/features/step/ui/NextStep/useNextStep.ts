import { useCallback } from 'react'
import { useStepStateUpdate } from '@/entities'

export const useNextStep = () => {
    const { incrementStep } = useStepStateUpdate()
    const handlePress = useCallback(() => {
        incrementStep()
    }, [incrementStep])
    return {
        handlePress
    }
}