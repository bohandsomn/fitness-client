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
