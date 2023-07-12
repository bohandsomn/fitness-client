import React, { FC } from 'react'
import { CreateUserContainer } from './CreateUserContainer'

const CreateUserContainerMeta = {
    title: 'Entities/Auth/CreateUserContainer',
    component: CreateUserContainer,
    decorators: [(Story: FC) => <Story />],
}

export default CreateUserContainerMeta

export const Basic = {}
