import React, { FC } from 'react'
import { ConfirmPasswordCreateUserField } from './ConfirmPasswordCreateUserField'
import { CreateUserProvider } from '@/entities'

const ConfirmPasswordCreateUserFieldMeta = {
    title: 'Features/Auth/ConfirmPasswordCreateUserField',
    component: ConfirmPasswordCreateUserField,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default ConfirmPasswordCreateUserFieldMeta

export const Basic = {}
