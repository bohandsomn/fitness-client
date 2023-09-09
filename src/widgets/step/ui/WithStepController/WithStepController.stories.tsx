import React, { FC } from 'react'
import { WithStepController } from './WithStepController'
import { StepProvider } from '@/entities'
import { Text } from 'native-base'

const WithStepControllerMeta = {
    title: 'Widgets/Step/WithStepController',
    component: WithStepController,
    decorators: [
        (Story: FC) => (
            <StepProvider data={{ step: 3, maxStep: 6 }}>
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

export default WithStepControllerMeta

export const Basic = {}

export const WithChildren = {
    args: {
        children: <Text>Lorem ipsum dolor</Text>,
    },
}

export const WithNextStepLabel = {
    args: {
        nextStepLabel: 'Next step label',
    },
}
