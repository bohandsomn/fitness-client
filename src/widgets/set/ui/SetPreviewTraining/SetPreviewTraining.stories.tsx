import React, { FC } from 'react'
import { SetPreviewTraining } from './SetPreviewTraining'
import { SetPreviewProvider, mockSetPreview } from '@/entities'

const SetPreviewTrainingMeta = {
    title: 'Widgets/Set/SetPreviewTraining',
    component: SetPreviewTraining,
    decorators: [
        (Story: FC) => (
            <SetPreviewProvider data={mockSetPreview}>
                <Story />
            </SetPreviewProvider>
        ),
    ],
}

export default SetPreviewTrainingMeta

export const Basic = {}
