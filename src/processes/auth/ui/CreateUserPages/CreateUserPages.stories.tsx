import React, { FC } from 'react'
import { CreateUserPages } from './CreateUserPages'
import { CreateUserProvider, StepProvider } from '@/entities'

const CreateUserPagesMeta = {
    title: 'Processes/Auth/CreateUserPages',
    component: CreateUserPages,
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

export default CreateUserPagesMeta

export const Basic = {}
