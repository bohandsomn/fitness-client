import React, { FC } from 'react'
import { Welcome } from './Welcome'
import { WelcomeProvider } from '@/entities'

const WelcomeMeta = {
    title: 'Pages/Auth/Welcome',
    component: Welcome,
    decorators: [
        (Story: FC) => (
            <WelcomeProvider>
                <Story />
            </WelcomeProvider>
        ),
    ],
}

export default WelcomeMeta

export const Basic = {}
