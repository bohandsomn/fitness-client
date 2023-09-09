import React, { FC } from 'react'
import { CreateSet } from './CreateSet'
import { CreateSetModalProvider, CreateSetProvider } from '@/entities'

const CreateSetMeta = {
    title: 'Features/Set/CreateSet',
    component: CreateSet,
    decorators: [
        (Story: FC) => (
            <CreateSetModalProvider>
                <CreateSetProvider>
                    <Story />
                </CreateSetProvider>
            </CreateSetModalProvider>
        ),
    ],
}

export default CreateSetMeta

export const Basic = {}
