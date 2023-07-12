import React, { FC } from 'react'
import { EnterWeightAndGoal } from './EnterWeightAndGoal'
import { CreateUserProvider } from '@/entities'

const EnterWeightAndGoalMeta = {
    title: 'Widgets/Auth/EnterWeightAndGoal',
    component: EnterWeightAndGoal,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default EnterWeightAndGoalMeta

export const Basic = {}
