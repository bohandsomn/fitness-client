import React, { FC } from 'react'
import { CreateUserWeights } from './CreateUserWeights'

const CreateUserWeightsMeta = {
    title: 'Pages/Auth/CreateUserWeights',
    component: CreateUserWeights,
    decorators: [(Story: FC) => <Story />],
}

export default CreateUserWeightsMeta

export const Basic = {}
