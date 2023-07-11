import { PropsWithChildren, ReactNode } from 'react'
import { LocaleDate } from '../../lib'

export interface IAppAgendaProps extends PropsWithChildren {
    currentDate: LocaleDate
    onChangeCurrentDate: (date: LocaleDate) => void
    minDate?: LocaleDate
    maxDate?: LocaleDate
    customHeader?: ReactNode
}