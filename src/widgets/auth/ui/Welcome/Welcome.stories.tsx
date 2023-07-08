import React from 'react'
import { WelcomeProvider } from '@/entities'
import { Welcome } from './Welcome'

const WelcomeMeta = {
    title: 'Widgets/Auth/Welcome',
    component: Welcome,
    decorators: [
        (Story: typeof Welcome) => (
            <WelcomeProvider>
                <Story />
            </WelcomeProvider>
        ),
    ],
}

export default WelcomeMeta

export const Basic = {}
