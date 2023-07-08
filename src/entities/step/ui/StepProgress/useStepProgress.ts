import { useStepStateSelector } from '../../providers'

export const useStepProgress = () => {
    const { maxStep, minStep, step } = useStepStateSelector((state) => state)
    return {
        maxStep,
        minStep,
        step
    }
}