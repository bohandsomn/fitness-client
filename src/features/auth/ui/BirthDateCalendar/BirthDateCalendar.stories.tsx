import React, { FC } from 'react'
import { BirthDateCalendar } from './BirthDateCalendar'
import { CreateUserProvider } from '@/entities'

const BirthDateCalendarMeta = {
    title: 'Features/Auth/BirthDateCalendar',
    component: BirthDateCalendar,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default BirthDateCalendarMeta

export const Basic = {}
