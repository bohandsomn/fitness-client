import React, { FC } from 'react'
import { CreateUserPassword } from './CreateUserPassword'

const CreateUserPasswordMeta = {
    title: 'Pages/Auth/CreateUserPassword',
    component: CreateUserPassword,
    decorators: [(Story: FC) => <Story />],
}

export default CreateUserPasswordMeta

export const Basic = {}
