import { useCreateUserStateSelector, useCreateUserStateUpdate } from '@/entities'
import { AppDate, isoDateAdapter } from '@/shared'

export const useBirthDateCalendar = () => {
    const birthday = useCreateUserStateSelector((state) => {
        if (state.birthday) {
            return state.birthday
        }
        const today = isoDateAdapter(new AppDate())
        return today
    })
    const { changeBirthday } = useCreateUserStateUpdate()
    const maxDate = isoDateAdapter(new AppDate())
    const minDate = isoDateAdapter(new AppDate(1900, 0, 1))
    return {
        birthday,
        changeBirthday,
        maxDate,
        minDate,
    }
}