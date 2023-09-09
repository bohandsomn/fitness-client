import React, { FC } from 'react'
import { ProgressLink } from './ProgressLink'
import { LostCaloriesProvider } from '@/entities'

const ProgressLinkMeta = {
    title: 'Features/Calories/ProgressLink',
    component: ProgressLink,
    decorators: [
        (Story: FC) => (
            <LostCaloriesProvider>
                <Story />
            </LostCaloriesProvider>
        ),
    ],
}

export default ProgressLinkMeta

export const Basic = {}
