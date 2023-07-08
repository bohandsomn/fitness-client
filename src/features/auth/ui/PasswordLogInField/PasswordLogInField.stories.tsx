import React, { FC } from 'react'
import { PasswordLogInField } from './PasswordLogInField'
import { LogInProvider } from '@/entities'

const PasswordLogInFieldMeta = {
    title: 'Features/Auth/PasswordLogInField',
    component: PasswordLogInField,
    decorators: [
        (Story: FC) => (
            <LogInProvider>
                <Story />
            </LogInProvider>
        ),
    ],
}

export default PasswordLogInFieldMeta

export const Basic = {}
