import { CaloriesConst, useAppTheme } from '@/shared'
import { caloriesToKilocalories } from '../../lib'
import { useLostCaloriesStateSelector } from '../../providers'

export const useDailyProgress = () => {
    const state = useLostCaloriesStateSelector((state) => state)
    const goalCalories = state.data?.goalCalories ?? 0
    const lostCalories = state.data?.lostCalories ?? 0
    const goalKiloCalories = caloriesToKilocalories(goalCalories)
    const lostKiloCalories = caloriesToKilocalories(lostCalories)
    const { colors } = useAppTheme()
    const backgroundColor = colors.disable
    const filledTrack = colors.accent
    const min = 0
    const max = goalCalories
    const value = lostCalories
    const header = CaloriesConst.DAILY_GOAL
    const metric = CaloriesConst.KCAL
    return {
        goalKiloCalories,
        lostKiloCalories,
        min,
        max,
        value,
        backgroundColor,
        filledTrack,
        state,
        header,
        metric,
    }
}