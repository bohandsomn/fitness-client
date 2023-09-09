import React, { FC } from 'react'
import { ErrorBoundaryContainer } from './ErrorBoundaryContainer'

const ErrorBoundaryContainerMeta = {
    title: 'Features/Error/ErrorBoundaryContainer',
    component: ErrorBoundaryContainer,
    decorators: [(Story: FC) => <Story />],
}

export default ErrorBoundaryContainerMeta

export const Basic = {}
