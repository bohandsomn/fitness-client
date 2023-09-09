import React, { FC } from 'react'
import { SetPreviewTraining } from './SetPreviewTraining'
import { mockSetPreview } from '../../__mocks__'
import { AppButton, SetConst } from '@/shared'
import { SetPreviewProvider } from '../../providers'

const SetPreviewTrainingMeta = {
    title: 'Entities/Set/SetPreviewTraining',
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

export const Basic = {
    args: {
        readMore: <AppButton>{SetConst.READ_MORE}</AppButton>,
        start: <AppButton isDark>{SetConst.START}</AppButton>,
    },
}
