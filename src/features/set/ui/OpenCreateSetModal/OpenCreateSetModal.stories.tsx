import React, { FC } from 'react'
import { CreateSetModalProvider } from '@/entities'
import { OpenCreateSetModal } from './OpenCreateSetModal'

const OpenCreateSetModalMeta = {
    title: 'Features/Set/OpenCreateSetModal',
    component: OpenCreateSetModal,
    decorators: [
        (Story: FC) => (
            <CreateSetModalProvider>
                <Story />
            </CreateSetModalProvider>
        ),
    ],
}

export default OpenCreateSetModalMeta

export const Basic = {}
