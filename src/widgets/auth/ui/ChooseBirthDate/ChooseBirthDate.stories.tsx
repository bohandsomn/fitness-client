import React, { FC } from 'react'
import { ChooseBirthDate } from './ChooseBirthDate'
import { CreateUserProvider } from '@/entities'

const ChooseBirthDateMeta = {
    title: 'Widgets/Auth/ChooseBirthDate',
    component: ChooseBirthDate,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default ChooseBirthDateMeta

export const Basic = {}
