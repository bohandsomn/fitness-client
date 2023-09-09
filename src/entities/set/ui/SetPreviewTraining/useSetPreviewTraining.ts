import { CaloriesConst, generateSource } from '@/shared'
import { useSetPreviewStateSelector } from '../../providers'
import { caloriesToKilocalories } from '@/entities/calories'

export const useSetPreviewTraining = () => {
    const { name, demonstration, calories } = useSetPreviewStateSelector((state) => ({
        name: state.name,
        demonstration: state.demonstration,
        calories: state.calories,
    }))
    const src = generateSource(demonstration)
    const height = 116
    const width = 90
    const alt = name
    const metric = CaloriesConst.KCAL
    const kilocalories = caloriesToKilocalories(calories)
    return {
        src,
        height,
        width,
        alt,
        name,
        kilocalories,
        metric,
    }
}