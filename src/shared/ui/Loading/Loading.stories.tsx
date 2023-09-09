import React, { FC } from 'react'
import { Loading } from './Loading'

const LoadingMeta = {
    title: 'Shared/Loading',
    component: Loading,
    decorators: [(Story: FC) => <Story />],
}

export default LoadingMeta

export const Basic = {}

export const Dark = {
    args: {
        isDark: true,
    },
}
