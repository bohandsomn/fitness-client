import React, { FC } from 'react'
import { CreateUserNameAndEmail } from './CreateUserNameAndEmail'

const CreateUserNameAndEmailMeta = {
    title: 'Pages/Auth/CreateUserNameAndEmail',
    component: CreateUserNameAndEmail,
    decorators: [(Story: FC) => <Story />],
}

export default CreateUserNameAndEmailMeta

export const Basic = {}
