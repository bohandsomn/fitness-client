import React, { FC } from 'react'
import { EnterHeight } from './EnterHeight'
import { CreateUserProvider } from '@/entities'

const EnterHeightMeta = {
    title: 'Widgets/Auth/EnterHeight',
    component: EnterHeight,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default EnterHeightMeta

export const Basic = {}
