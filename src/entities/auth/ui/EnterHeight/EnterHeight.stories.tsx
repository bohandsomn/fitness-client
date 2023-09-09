import React, { FC } from 'react'
import { EnterHeight } from './EnterHeight'
import { CreateUserProvider } from '../../providers'

const EnterHeightMeta = {
    title: 'Entities/Auth/EnterHeight',
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
