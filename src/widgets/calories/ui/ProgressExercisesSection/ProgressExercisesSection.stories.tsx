import React, { FC } from 'react'
import { HistoryProvider } from '@/entities'
import { ProgressExercisesSection } from './ProgressExercisesSection'
import { NavigationDecorator } from '../../../../../.storybook/mocks'

const ProgressExercisesSectionMeta = {
    title: 'Widgets/Calories/ProgressExercisesSection',
    component: ProgressExercisesSection,
    decorators: [
        (Story: FC) => (
            <HistoryProvider>
                <Story />
            </HistoryProvider>
        ),
        NavigationDecorator,
    ],
}

export default ProgressExercisesSectionMeta

export const Basic = {}
