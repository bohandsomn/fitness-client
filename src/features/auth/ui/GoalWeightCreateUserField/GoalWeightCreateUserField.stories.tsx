import React, { FC } from 'react'
import { GoalWeightCreateUserField } from './GoalWeightCreateUserField'
import { CreateUserProvider } from '@/entities'

const GoalWeightCreateUserFieldMeta = {
    title: 'Features/Auth/GoalWeightCreateUserField',
    component: GoalWeightCreateUserField,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default GoalWeightCreateUserFieldMeta

export const Basic = {}
