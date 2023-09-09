import React from 'react'
import { LogIn } from './LogIn'
import { WelcomeProvider } from '@/entities'

const LogInMeta = {
    title: 'Features/Auth/LogIn',
    component: LogIn,
    decorators: [
        (Story: typeof LogIn) => (
            <WelcomeProvider>
                <Story />
            </WelcomeProvider>
        ),
    ],
}

export default LogInMeta

export const Basic = {}
