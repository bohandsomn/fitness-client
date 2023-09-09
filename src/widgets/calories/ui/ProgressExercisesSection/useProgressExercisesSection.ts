import { caloriesToKilocalories, useHistoryStateSelector } from '@/entities'
import { AppDate, CaloriesConst, ISODate, isoDateAdapter, usePageNavigation, weekMonthDayAdapter } from '@/shared'

export const useProgressExercisesSection = () => {
    const date = usePageNavigation().options?.date as ISODate | undefined
    const currentDate = date || isoDateAdapter(new AppDate())
    const weekMonthDay = weekMonthDayAdapter(new AppDate(currentDate))
    const calories = useHistoryStateSelector((state) => state.data?.calories || 0)
    const kiloCalories = caloriesToKilocalories(calories)
    const metric = CaloriesConst.KCAL
    return {
        weekMonthDay,
        kiloCalories,
        metric,
    }
}