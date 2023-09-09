import React, { FC } from 'react'
import { NameCreateSetField } from './NameCreateSetField'
import { CreateSetProvider } from '@/entities'

const NameCreateSetFieldMeta = {
    title: 'Features/Set/NameCreateSetField',
    component: NameCreateSetField,
    decorators: [
        (Story: FC) => (
            <CreateSetProvider>
                <Story />
            </CreateSetProvider>
        ),
    ],
}

export default NameCreateSetFieldMeta

export const Basic = {}
