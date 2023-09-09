import React, { FC } from 'react'
import { NameCreateUserField } from './NameCreateUserField'
import { CreateUserProvider } from '@/entities'

const NameCreateUserFieldMeta = {
    title: 'Features/Auth/NameCreateUserField',
    component: NameCreateUserField,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default NameCreateUserFieldMeta

export const Basic = {}
