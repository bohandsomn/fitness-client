import React, { FC } from 'react'
import { CreateAccountLink } from './CreateAccountLink'

const CreateAccountLinkMeta = {
    title: 'Features/Auth/CreateAccountLink',
    component: CreateAccountLink,
    decorators: [(Story: FC) => <Story />],
}

export default CreateAccountLinkMeta

export const Basic = {}
