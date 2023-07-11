import React, { FC } from 'react'
import { EmailCreateUserField } from './EmailCreateUserField'
import { CreateUserProvider } from '@/entities'

const EmailCreateUserFieldMeta = {
    title: 'Features/Auth/EmailCreateUserField',
    component: EmailCreateUserField,
    decorators: [
        (Story: FC) => (
            <CreateUserProvider>
                <Story />
            </CreateUserProvider>
        ),
    ],
}

export default EmailCreateUserFieldMeta

export const Basic = {}
