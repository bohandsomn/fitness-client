import React, { FC } from 'react'
import { CreateUserDifficulty } from './CreateUserDifficulty'

const CreateUserDifficultyMeta = {
    title: 'Pages/Auth/CreateUserDifficulty',
    component: CreateUserDifficulty,
    decorators: [(Story: FC) => <Story />],
}

export default CreateUserDifficultyMeta

export const Basic = {}
