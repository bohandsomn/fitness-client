import React, { FC } from 'react'
import { DescriptionCreateSetField } from './DescriptionCreateSetField'
import { CreateSetProvider } from '@/entities'

const DescriptionCreateSetFieldMeta = {
    title: 'Features/Set/DescriptionCreateSetField',
    component: DescriptionCreateSetField,
    decorators: [
        (Story: FC) => (
            <CreateSetProvider>
                <Story />
            </CreateSetProvider>
        ),
    ],
}

export default DescriptionCreateSetFieldMeta

export const Basic = {}
