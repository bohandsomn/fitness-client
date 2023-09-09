import React, { FC } from 'react'
import { EnterNameAndEmail } from './EnterNameAndEmail'
import { CreateUserProvider } from '@/entities'

const EnterNameAndEmailMeta = {
    title: 'Widgets/Auth/EnterNameAndEmail',
    component: EnterNameAndEmail,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default EnterNameAndEmailMeta

export const Basic = {}
