import React, { FC } from 'react'
import { AppCalendar } from './AppCalendar'
import { isoDateAdapter } from '../../lib'

const AppCalendarMeta = {
    title: 'Shared/AppCalendar',
    component: AppCalendar,
    decorators: [(Story: FC) => <Story />],
    argTypes: {
        onChangeCurrentDate: {
            action: 'onChangeCurrentDate',
        },
    },
}

export default AppCalendarMeta

export const Basic = {
    args: {
        currentDate: isoDateAdapter(new Date()),
        onChangeCurrentDate: () => {},
    },
}

export const MinDate = {
    args: {
        currentDate: isoDateAdapter(new Date()),
        onChangeCurrentDate: () => {},
        minDate: isoDateAdapter(new Date(2023, 0, 1)),
    },
}

export const MaxDate = {
    args: {
        currentDate: isoDateAdapter(new Date()),
        onChangeCurrentDate: () => {},
        maxDate: isoDateAdapter(new Date(2023, 11, 31)),
    },
}
