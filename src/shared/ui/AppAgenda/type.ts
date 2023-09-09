import { PropsWithChildren, ReactElement } from 'react'
import { IViewProps } from 'native-base/lib/typescript/components/basic/View/types'
import { LocaleDate } from '../../lib'

export interface IAppAgendaProps extends PropsWithChildren {
    currentDate: LocaleDate
    onChangeCurrentDate: (date: LocaleDate) => void
    minDate?: LocaleDate
    maxDate?: LocaleDate
    customHeader?: ReactElement
    height?: IViewProps['height']
}