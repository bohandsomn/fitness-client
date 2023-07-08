import React from 'react'
import { EmailLogInField } from './EmailLogInField'
import { LogInProvider } from '@/entities'

const EmailLogInFieldMeta = {
    title: 'Features/Auth/EmailLogInField',
    component: EmailLogInField,
    decorators: [
        (Story: typeof EmailLogInField) => (
            <LogInProvider>
                <Story />
            </LogInProvider>
        ),
    ],
}

export default EmailLogInFieldMeta

export const Basic = {}
