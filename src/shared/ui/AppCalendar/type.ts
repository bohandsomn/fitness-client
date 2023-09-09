import { ReactNode } from 'react'
import { ISODate } from '../../lib'

export interface IAppCalendarProps {
    currentDate: ISODate
    onChangeCurrentDate: (date: ISODate) => void
    minDate?: ISODate
    maxDate?: ISODate
    customHeader?: ReactNode
}
