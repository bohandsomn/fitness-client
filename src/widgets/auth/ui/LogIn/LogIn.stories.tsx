import React, { FC } from 'react'
import { LogIn } from './LogIn'

const LogInMeta = {
    title: 'Widgets/Auth/LogIn',
    component: LogIn,
    decorators: [(Story: FC) => <Story />],
}

export default LogInMeta

export const Basic = {}
