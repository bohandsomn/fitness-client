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
