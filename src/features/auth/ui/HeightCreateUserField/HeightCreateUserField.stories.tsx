import React, { FC } from 'react'
import { HeightCreateUserField } from './HeightCreateUserField'
import { CreateUserProvider } from '@/entities'

const HeightCreateUserFieldMeta = {
    title: 'Features/Auth/HeightCreateUserField',
    component: HeightCreateUserField,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default HeightCreateUserFieldMeta

export const Basic = {}
