import { useAppTheme } from '@/shared'
import { useStepStateSelector } from '../../providers'

export const useStepProgress = () => {
    const { maxStep, minStep, step } = useStepStateSelector((state) => state)
    const { colors } = useAppTheme()
    const filledTrack = colors.primary
    const backgroundColor = colors.disable
    return {
        maxStep,
        minStep,
        step,
        filledTrack,
        backgroundColor,
    }
}