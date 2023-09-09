import React, { FC } from 'react'
import { ProgressAgenda } from './ProgressAgenda'
import { LostCaloriesProvider } from '@/entities'

const ProgressAgendaMeta = {
    title: 'Widgets/Calories/ProgressAgenda',
    component: ProgressAgenda,
    decorators: [
        (Story: FC) => (
            <LostCaloriesProvider>
                <Story />
            </LostCaloriesProvider>
        ),
    ],
}

export default ProgressAgendaMeta

export const Basic = {}
