import React, { FC } from 'react'
import { CreateUserSteps } from './CreateUserSteps'
import { CreateUserProvider, StepProvider } from '@/entities'

const CreateUserStepsMeta = {
    title: 'Processes/Auth/CreateUserSteps',
    component: CreateUserSteps,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <StepProvider>
                    <Story />
                </StepProvider>
            </CreateUserProvider>
        ),
    ],
}

export default CreateUserStepsMeta

export const Basic = {}
