import { CaloriesConst, useAppTheme } from '@/shared'
import { useExercisePayloadStateSelector } from '../../providers'

export const useExercisePayload = () => {
    const { header, calories } = useExercisePayloadStateSelector((state) => ({
        header: state.header,
        calories: state.calories,
    }))
    const { colors } = useAppTheme()
    const backgroundColor = colors.white
    const metric = CaloriesConst.KCAL
    return {
        header,
        calories,
        backgroundColor,
        metric,
    }
}