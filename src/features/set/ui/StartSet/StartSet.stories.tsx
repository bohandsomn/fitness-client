import React, { FC } from 'react'
import { StartSet } from './StartSet'
import { SetPreviewProvider, mockSetPreview } from '@/entities'

const StartSetMeta = {
    title: 'Feature/Set/StartSet',
    component: StartSet,
    decorators: [
        (Story: FC) => (
            <SetPreviewProvider data={mockSetPreview}>
                <Story />
            </SetPreviewProvider>
        ),
    ],
}

export default StartSetMeta

export const Basic = {}
