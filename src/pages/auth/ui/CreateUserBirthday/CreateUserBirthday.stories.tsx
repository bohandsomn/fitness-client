import React, { FC } from 'react'
import { CreateUserBirthday } from './CreateUserBirthday'

const CreateUserBirthdayMeta = {
    title: 'Pages/Auth/CreateUserBirthday',
    component: CreateUserBirthday,
    decorators: [(Story: FC) => <Story />],
}

export default CreateUserBirthdayMeta

export const Basic = {}
