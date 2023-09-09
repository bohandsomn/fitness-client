import { useCreateUserStateSelector, useCreateUserStateUpdate } from '@/entities'
import { AppDate, isoDateAdapter } from '@/shared'

export const useGoalDateCalendar = () => {
    const goalDate = useCreateUserStateSelector((state) => {
        if (state.goalDate) {
            return state.goalDate
        }
        const today = isoDateAdapter(new AppDate())
        return today
    })
    const { changeGoalDate } = useCreateUserStateUpdate()
    const minDate = isoDateAdapter(new AppDate())
    return {
        goalDate,
        changeGoalDate,
        minDate,
    }
}