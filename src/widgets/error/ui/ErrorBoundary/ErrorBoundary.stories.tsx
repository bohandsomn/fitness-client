import React, { FC } from 'react'
import { ErrorBoundary } from './ErrorBoundary'

const ErrorBoundaryMeta = {
    title: 'Widgets/Error/ErrorBoundary',
    component: ErrorBoundary,
    decorators: [(Story: FC) => <Story />],
}

export default ErrorBoundaryMeta

export const Basic = {}

export const Dark = {
    args: {
        isDark: true,
    },
}
