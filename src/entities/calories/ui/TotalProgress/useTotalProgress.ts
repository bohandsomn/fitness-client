import { CaloriesConst, useAppTheme } from '@/shared'
import { caloriesToKilocalories } from '../../lib'
import { useLostCaloriesStateSelector } from '../../providers'

export const useTotalProgress = () => {
    const state = useLostCaloriesStateSelector((state) => state)
    const goalCalories = state.data?.goalCalories ?? 0
    const lostCalories = state.data?.lostCalories ?? 0
    const goalKiloCalories = caloriesToKilocalories(goalCalories)
    const lostKiloCalories = caloriesToKilocalories(lostCalories)
    const { colors } = useAppTheme()
    const backgroundColorContainer = colors.primary
    const textColor = colors.white
    const backgroundColor = colors.disable
    const filledTrack = colors.accent
    const min = 0
    const max = goalCalories
    const value = lostCalories
    const lost = CaloriesConst.LOST_CALORIES
    const main = CaloriesConst.MAIN_CALORIES
    const metric = CaloriesConst.KCAL
    return {
        goalKiloCalories,
        lostKiloCalories,
        backgroundColorContainer,
        textColor,
        backgroundColor,
        filledTrack,
        min,
        max,
        value,
        state,
        lost,
        main,
        metric,
    }
}