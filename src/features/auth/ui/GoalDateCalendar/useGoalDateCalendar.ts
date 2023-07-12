import { useCreateUserStateSelector, useCreateUserStateUpdate } from '@/entities'
import { isoDateAdapter } from '@/shared'

export const useGoalDateCalendar = () => {
    const goalDate = useCreateUserStateSelector((state) => {
        if (state.goalDate) {
            return state.goalDate
        }
        const today = isoDateAdapter(new Date())
        return today
    })
    const { changeGoalDate } = useCreateUserStateUpdate()
    const minDate = isoDateAdapter(new Date())
    return {
        goalDate,
        changeGoalDate,
        minDate,
    }
}