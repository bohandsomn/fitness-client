import React, { FC } from 'react'
import { PasswordCreateUserField } from './PasswordCreateUserField'
import { CreateUserProvider } from '@/entities'

const PasswordCreateUserFieldMeta = {
    title: 'Features/Auth/PasswordCreateUserField',
    component: PasswordCreateUserField,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default PasswordCreateUserFieldMeta

export const Basic = {}
