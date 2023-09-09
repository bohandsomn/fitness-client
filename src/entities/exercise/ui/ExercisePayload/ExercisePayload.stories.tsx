import React, { FC } from 'react'
import { Text, View } from 'native-base'
import { AppImage, generateSource } from '@/shared'
import { ExercisePayload } from './ExercisePayload'
import { ExercisePayloadProvider } from '../../providers'
import { mockExercisePayload } from '../../__mocks__'

const ExercisePayloadMeta = {
    title: 'Entities/Exercise/ExercisePayload',
    component: ExercisePayload,
    decorators: [
        (Story: FC) => (
            <ExercisePayloadProvider data={mockExercisePayload}>
                <Story />
            </ExercisePayloadProvider>
        ),
    ],
}

export default ExercisePayloadMeta

export const Basic = {}

export const WithImage = {
    args: {
        image: (
            <AppImage
                src={generateSource(mockExercisePayload.demonstration)}
                alt={mockExercisePayload.header}
                width="56"
                height="56"
                quality="0.7"
            />
        ),
    },
}

export const WithRight = {
    args: {
        right: (
            <View>
                <Text>Right</Text>
            </View>
        ),
    },
}

export const WithImageAndRight = {
    args: {
        image: (
            <AppImage
                src={generateSource(mockExercisePayload.demonstration)}
                alt={mockExercisePayload.header}
                width="56"
                height="56"
                quality="0.7"
            />
        ),
        right: (
            <View>
                <Text>Right</Text>
            </View>
        ),
    },
}
