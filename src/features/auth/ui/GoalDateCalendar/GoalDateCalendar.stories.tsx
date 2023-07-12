import React, { FC } from 'react'
import { GoalDateCalendar } from './GoalDateCalendar'
import { CreateUserProvider } from '@/entities'

const GoalDateCalendarMeta = {
    title: 'GoalDateCalendar',
    component: GoalDateCalendar,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default GoalDateCalendarMeta

export const Basic = {}
