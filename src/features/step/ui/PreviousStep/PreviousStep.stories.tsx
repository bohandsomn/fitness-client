import React, { FC } from 'react'
import { PreviousStep } from './PreviousStep'
import { StepProvider } from '../../../../entities/step/providers'

const PreviousStepMeta = {
    title: 'Features/Step/PreviousStep',
    component: PreviousStep,
    decorators: [
        (Story: FC) => (
            <StepProvider>
                <Story />
            </StepProvider>
        ),
    ],
}

export default PreviousStepMeta

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
