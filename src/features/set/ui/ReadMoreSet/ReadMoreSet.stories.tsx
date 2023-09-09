import React, { FC } from 'react'
import { ReadMoreSet } from './ReadMoreSet'
import { SetPreviewProvider, mockSetPreview } from '@/entities'

const ReadMoreSetMeta = {
    title: 'Features/Set/ReadMoreSet',
    component: ReadMoreSet,
    decorators: [
        (Story: FC) => (
            <SetPreviewProvider data={mockSetPreview}>
                <Story />
            </SetPreviewProvider>
        ),
    ],
}

export default ReadMoreSetMeta

export const Basic = {}
