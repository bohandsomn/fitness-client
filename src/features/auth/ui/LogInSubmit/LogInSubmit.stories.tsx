import React, { FC } from 'react'
import { LogInSubmit } from './LogInSubmit'
import { LogInProvider } from '@/entities'

const LogInSubmitMeta = {
    title: 'Features/Auth/LogInSubmit',
    component: LogInSubmit,
    decorators: [
        (Story: FC) => (
            <LogInProvider>
                <Story />
            </LogInProvider>
        ),
    ],
}

export default LogInSubmitMeta

export const Basic = {}
