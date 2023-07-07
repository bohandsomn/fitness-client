import React from 'react'
import { Welcome } from './Welcome'

const WelcomeMeta = {
    title: 'Widgets/Auth/Welcome',
    component: Welcome,
    decorators: [(Story: typeof Welcome) => <Story />],
}

export default WelcomeMeta

export const Basic = {}
