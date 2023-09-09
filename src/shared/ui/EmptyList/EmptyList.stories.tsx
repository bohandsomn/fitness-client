import React, { FC } from 'react'
import { EmptyList } from './EmptyList'

const EmptyListMeta = {
    title: 'Shared/EmptyList',
    component: EmptyList,
    decorators: [(Story: FC) => <Story />],
}

export default EmptyListMeta

export const Basic = {}
