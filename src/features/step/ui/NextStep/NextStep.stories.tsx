import React, { FC } from 'react'
import { NextStep } from './NextStep'
import { StepProvider } from '../../../../entities/step/providers'
import { Text } from 'native-base'

const NextStepMeta = {
    title: 'Features/Step/NextStep',
    component: NextStep,
    decorators: [
        (Story: FC) => (
            <StepProvider>
                <Story />
            </StepProvider>
        ),
    ],
    argTypes: {
        handleConfirm: {
            action: 'handleConfirm',
        },
    },
}

export default NextStepMeta

export const Basic = {}

export const StartStep = {
    decorators: [
        (Story: FC) => (
            <StepProvider data={{ step: 0, minStep: 0, maxStep: 99 }}>
                <Story />
            </StepProvider>
        ),
    ],
}

export const EndStep = {
    decorators: [
        (Story: FC) => (
            <StepProvider data={{ step: 99, minStep: 0, maxStep: 99 }}>
                <Story />
            </StepProvider>
        ),
    ],
}

export const PenultimateStep = {
    decorators: [
        (Story: FC) => (
            <StepProvider data={{ step: 98, minStep: 0, maxStep: 99 }}>
                <Story />
            </StepProvider>
        ),
    ],
    args: {
        children: <Text>Confirm</Text>,
    },
}

export const EndStepWithChildren = {
    decorators: [
        (Story: FC) => (
            <StepProvider data={{ step: 99, minStep: 0, maxStep: 99 }}>
                <Story />
            </StepProvider>
        ),
    ],
    args: {
        children: <Text>Confirm</Text>,
    },
}
