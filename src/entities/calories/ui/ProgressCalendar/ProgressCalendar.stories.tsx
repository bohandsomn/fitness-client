import React, { FC } from 'react'
import { ProgressCalendar } from './ProgressCalendar'
import { NavigationDecorator } from '../../../../../.storybook/mocks'
import { HistoryProvider } from '../../providers'

const ProgressCalendarMeta = {
    title: 'Entities/Calories/ProgressCalendar',
    component: ProgressCalendar,
    decorators: [
        (Story: FC) => (
            <HistoryProvider>
                <Story />
            </HistoryProvider>
        ),
        NavigationDecorator,
    ],
}

export default ProgressCalendarMeta

export const Basic = {}
