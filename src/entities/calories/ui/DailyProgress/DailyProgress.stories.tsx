import React, { FC } from 'react'
import { DailyProgress } from './DailyProgress'
import { LostCaloriesProvider } from '../../providers'

const DailyProgressMeta = {
    title: 'Entities/Calories/DailyProgress',
    component: DailyProgress,
    decorators: [
        (Story: FC) => (
            <LostCaloriesProvider>
                <Story />
            </LostCaloriesProvider>
        ),
    ],
}

export default DailyProgressMeta

export const Basic = {}
