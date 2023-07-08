import React, { FC } from 'react'
import { StepProgress } from './StepProgress'
import { StepProvider } from '../../providers'
import { Text, View } from 'native-base'

const StepProgressMeta = {
    title: 'Entities/Step/StepProgress',
    component: StepProgress,
    decorators: [
        (Story: FC) => (
            <StepProvider>
                <Story />
            </StepProvider>
        ),
    ],
}

export default StepProgressMeta

export const Basic = {
    decorators: [
        (Story: FC) => (
            <StepProvider data={{ minStep: 0, step: 0, maxStep: 99 }}>
                <Story />
            </StepProvider>
        ),
    ],
}

export const Empty = {
    decorators: [
        (Story: FC) => (
            <StepProvider data={{ minStep: 0, step: 0, maxStep: 99 }}>
                <Story />
            </StepProvider>
        ),
    ],
}

export const Full = {
    decorators: [
        (Story: FC) => (
            <StepProvider data={{ minStep: 0, step: 99, maxStep: 99 }}>
                <Story />
            </StepProvider>
        ),
    ],
}

export const Half = {
    decorators: [
        (Story: FC) => (
            <StepProvider data={{ minStep: 0, step: 49, maxStep: 99 }}>
                <Story />
            </StepProvider>
        ),
    ],
}

export const Fifth = {
    decorators: [
        (Story: FC) => (
            <StepProvider data={{ minStep: 0, step: 19, maxStep: 99 }}>
                <Story />
            </StepProvider>
        ),
    ],
}

export const WithShowProgressInNumbers = {
    args: {
        isShowProgressInNumbers: true,
    },
}

export const WithShowProgressInNumbersAndRightElement = {
    args: {
        isShowProgressInNumbers: true,
        rightElement: (
            <View>
                <Text fontSize="12px">steps</Text>
            </View>
        ),
    },
}

export const WithRightElement = {
    args: {
        rightElement: (
            <View>
                <Text fontSize="12px">steps</Text>
            </View>
        ),
    },
}
