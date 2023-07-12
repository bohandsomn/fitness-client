import React, { FC } from 'react'
import { CurrentWeightCreateUserField } from './CurrentWeightCreateUserField'
import { CreateUserProvider } from '@/entities'

const CurrentWeightCreateUserFieldMeta = {
    title: 'Features/Auth/CurrentWeightCreateUserField',
    component: CurrentWeightCreateUserField,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default CurrentWeightCreateUserFieldMeta

export const Basic = {}
