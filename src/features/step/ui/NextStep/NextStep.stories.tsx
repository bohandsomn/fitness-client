import React, { FC } from 'react'
import { NextStep } from './NextStep'
import { StepProvider } from '../../../../entities/step/providers'

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
