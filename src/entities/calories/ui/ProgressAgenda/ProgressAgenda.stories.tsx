import React, { FC } from 'react'
import { ProgressAgenda } from './ProgressAgenda'
import { LostCaloriesProvider } from '../../providers'

const ProgressAgendaMeta = {
    title: 'Entities/Calories/ProgressAgenda',
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
