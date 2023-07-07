import React from 'react'
import { CreateAccount } from './CreateAccount'
import { WelcomeProvider } from '@/entities'

const CreateAccountMeta = {
    title: 'Features/Auth/CreateAccount',
    component: CreateAccount,
    decorators: [
        (Story: typeof CreateAccount) => (
            <WelcomeProvider>
                <Story />
            </WelcomeProvider>
        ),
    ],
}

export default CreateAccountMeta

export const Basic = {}
