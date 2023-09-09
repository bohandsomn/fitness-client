import React, { FC, useState } from 'react'
import { AppCalendar } from './AppCalendar'
import { AppDate, ISODate, isoDateAdapter } from '../../lib'

const AppCalendarMeta = {
    title: 'Shared/AppCalendar',
    component: () => {
        const [currentDate, setCurrentDate] = useState<ISODate>(
            isoDateAdapter(new AppDate()),
        )
        return (
            <AppCalendar
                currentDate={currentDate}
                onChangeCurrentDate={setCurrentDate}
            />
        )
    },
    decorators: [(Story: FC) => <Story />],
    argTypes: {
        onChangeCurrentDate: {
            action: 'onChangeCurrentDate',
        },
    },
}

export default AppCalendarMeta

export const Basic = {
    args: {},
}

export const MinDate = {
    args: {
        minDate: isoDateAdapter(new AppDate(2023, 0, 1)),
    },
}

export const MaxDate = {
    args: {
        maxDate: isoDateAdapter(new AppDate(2023, 11, 31)),
    },
}
