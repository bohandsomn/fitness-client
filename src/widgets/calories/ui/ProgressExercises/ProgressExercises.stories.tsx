import React, { FC } from 'react'
import { HistoryProvider } from '@/entities'
import { ProgressExercises } from './ProgressExercises'
import { NavigationDecorator } from '../../../../../.storybook/mocks'

const ProgressExercisesMeta = {
    title: 'Widgets/Calories/ProgressExercises',
    component: ProgressExercises,
    decorators: [
        (Story: FC) => (
            <HistoryProvider>
                <Story />
            </HistoryProvider>
        ),
        NavigationDecorator,
    ],
}

export default ProgressExercisesMeta

export const Basic = {}
