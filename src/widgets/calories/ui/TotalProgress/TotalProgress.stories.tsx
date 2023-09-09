import React, { FC } from 'react'
import { TotalProgress } from './TotalProgress'
import { LostCaloriesProvider } from '@/entities'

const TotalProgressMeta = {
    title: 'Widgets/Calories/TotalProgress',
    component: TotalProgress,
    decorators: [
        (Story: FC) => (
            <LostCaloriesProvider>
                <Story />
            </LostCaloriesProvider>
        ),
    ],
}

export default TotalProgressMeta

export const Basic = {}
