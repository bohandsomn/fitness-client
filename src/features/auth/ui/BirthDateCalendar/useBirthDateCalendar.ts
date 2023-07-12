import { useCreateUserStateSelector, useCreateUserStateUpdate } from '@/entities'
import { isoDateAdapter } from '@/shared'

export const useBirthDateCalendar = () => {
    const birthday = useCreateUserStateSelector((state) => {
        if (state.birthday) {
            return state.birthday
        }
        const today = isoDateAdapter(new Date())
        return today
    })
    const { changeBirthday } = useCreateUserStateUpdate()
    const maxDate = isoDateAdapter(new Date())
    const minDate = isoDateAdapter(new Date(1900, 0, 1))
    return {
        birthday,
        changeBirthday,
        maxDate,
        minDate,
    }
}