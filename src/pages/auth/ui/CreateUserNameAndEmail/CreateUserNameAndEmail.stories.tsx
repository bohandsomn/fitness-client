import React, { FC } from 'react'
import { CreateUserNameAndEmail } from './CreateUserNameAndEmail'
import { CreateUserProvider } from '@/entities'

const CreateUserNameAndEmailMeta = {
    title: 'Pages/Auth/CreateUserNameAndEmail',
    component: CreateUserNameAndEmail,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default CreateUserNameAndEmailMeta

export const Basic = {}
