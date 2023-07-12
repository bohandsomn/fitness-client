import React, { FC } from 'react'
import { CreateUserDifficulty } from './CreateUserDifficulty'
import { CreateUserProvider } from '@/entities'

const CreateUserDifficultyMeta = {
    title: 'Pages/Auth/CreateUserDifficulty',
    component: CreateUserDifficulty,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default CreateUserDifficultyMeta

export const Basic = {}
