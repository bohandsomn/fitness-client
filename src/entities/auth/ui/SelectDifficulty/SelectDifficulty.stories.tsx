import React, { FC } from 'react'
import { SelectDifficulty } from './SelectDifficulty'
import { CreateUserProvider } from '../../providers'
import { SelectDifficultyProvider } from '@/entities/user'

const SelectDifficultyMeta = {
    title: 'Entities/Auth/SelectDifficulty',
    component: SelectDifficulty,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <SelectDifficultyProvider>
                    <Story />
                </SelectDifficultyProvider>
            </CreateUserProvider>
        ),
    ],
}

export default SelectDifficultyMeta

export const Basic = {}
