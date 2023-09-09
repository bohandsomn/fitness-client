import React, { FC } from 'react'
import { CreateUser } from './CreateUser'

const CreateUserMeta = {
    title: 'Processes/Auth/CreateUser',
    component: CreateUser,
    decorators: [(Story: FC) => <Story />],
}

export default CreateUserMeta

export const Basic = {}
