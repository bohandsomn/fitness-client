import React, { FC } from 'react'
import { CreateSetModal } from './CreateSetModal'
import { CreateSetModalProvider, CreateSetProvider } from '@/entities'

const CreateSetModalMeta = {
    title: 'Widgets/Set/CreateSetModal',
    component: CreateSetModal,
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

export default CreateSetModalMeta

export const Basic = {}
