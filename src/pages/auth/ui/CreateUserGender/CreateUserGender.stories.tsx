import React, { FC } from 'react'
import { CreateUserGender } from './CreateUserGender'
import { CreateUserProvider, SelectGenderProvider } from '@/entities'

const CreateUserGenderMeta = {
    title: 'Pages/Auth/CreateUserGender',
    component: CreateUserGender,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default CreateUserGenderMeta

export const Basic = {}
