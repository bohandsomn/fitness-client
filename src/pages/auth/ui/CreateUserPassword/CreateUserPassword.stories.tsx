import React, { FC } from 'react'
import { CreateUserPassword } from './CreateUserPassword'
import { CreateUserProvider } from '@/entities'

const CreateUserPasswordMeta = {
    title: 'Pages/Auth/CreateUserPassword',
    component: CreateUserPassword,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default CreateUserPasswordMeta

export const Basic = {}
