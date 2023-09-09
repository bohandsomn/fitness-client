import { AppDate, ISODate, isoDateAdapter, usePageNavigation } from '@/shared'
import { useHistoryStateUpdate } from '../../providers'
import { useUserModel } from '@/entities/user'

export const useProgressCalendar = () => {
    const pageNavigation = usePageNavigation()
    const options = pageNavigation.options
    const date = options?.date as ISODate | undefined
    const currentDate = date || isoDateAdapter(new AppDate())
    const { handleRefresh: onChangeCurrentDate } = useHistoryStateUpdate()
    const userModel = useUserModel()
    const registeredAt = userModel.user.data?.registeredAt
    const minDate = registeredAt
        ? isoDateAdapter(new AppDate(registeredAt))
        : undefined
    const maxDate = isoDateAdapter(new AppDate())
    return {
        currentDate,
        onChangeCurrentDate,
        minDate,
        maxDate,
    }
}