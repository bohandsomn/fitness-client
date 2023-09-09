import React, { FC } from 'react'
import { ExercisePayloadProgress } from './ExercisePayloadProgress'
import { ExercisePayloadProvider } from '../../providers'
import { mockExercisePayload } from '../../__mocks__'

const ExercisePayloadProgressMeta = {
    title: 'Entities/Exercise/ExercisePayloadProgress',
    component: ExercisePayloadProgress,
    decorators: [
        (Story: FC) => (
            <ExercisePayloadProvider data={mockExercisePayload}>
                <Story />
            </ExercisePayloadProvider>
        ),
    ],
}

export default ExercisePayloadProgressMeta

export const Basic = {}
