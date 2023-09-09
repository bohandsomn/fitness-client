import React, { FC } from 'react'
import { CreateSetModalProvider } from '@/entities'
import { CancelSetModal } from './CancelSetModal'

const CancelSetModalMeta = {
    title: 'Features/Set/CancelSetModal',
    component: CancelSetModal,
    decorators: [
        (Story: FC) => (
            <CreateSetModalProvider>
                <Story />
            </CreateSetModalProvider>
        ),
    ],
}

export default CancelSetModalMeta

export const Basic = {}
