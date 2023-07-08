import React, { FC } from 'react'
import { Welcome } from './Welcome'

const WelcomeMeta = {
    title: 'Pages/Auth/Welcome',
    component: Welcome,
    decorators: [(Story: FC) => <Story />],
}

export default WelcomeMeta

export const Basic = {}
