import { useLostCaloriesStateSelector } from '@/entities'
import { AppDate, CaloriesConst, ISODate, PageNames, isoDateAdapter, useAppNavigation } from '@/shared'

export const useProgressLink = () => {
    const currentDate = useLostCaloriesStateSelector((state): ISODate => {
        const currentDate = state.data?.currentDate
        const date = currentDate ? new AppDate(currentDate) : new AppDate()
        const isoCurrentDate = isoDateAdapter(date)
        return isoCurrentDate
    })
    const navigation = useAppNavigation()
    const handlePress = () => {
        navigation.goTo(PageNames.PROGRESS, { date: currentDate })
    }
    const header = CaloriesConst.PROGRESS
    return {
        handlePress,
        header,
    }
}