import React, { FC } from 'react'
import { ChooseGoalDate } from './ChooseGoalDate'
import { CreateUserProvider } from '@/entities'

const ChooseGoalDateMeta = {
    title: 'Widgets/Auth/ChooseGoalDate',
    component: ChooseGoalDate,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default ChooseGoalDateMeta

export const Basic = {}
