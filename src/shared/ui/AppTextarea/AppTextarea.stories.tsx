import React, { FC } from 'react'
import { AppTextarea } from './AppTextarea'

const AppTextareaMeta = {
    title: 'Shared/AppTextarea',
    component: AppTextarea,
    decorators: [(Story: FC) => <Story />],
}

export default AppTextareaMeta

export const Basic = {
    args: {
        placeholder: 'Placeholder',
    },
}
