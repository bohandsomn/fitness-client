import React, { FC } from 'react'
import { SetsTraining } from './SetsTraining'
import { SetsProvider } from '@/entities'

const SetsTrainingMeta = {
    title: 'Widgets/Set/SetsTraining',
    component: SetsTraining,
    decorators: [
        (Story: FC) => (
            <SetsProvider>
                <Story />
            </SetsProvider>
        ),
    ],
}

export default SetsTrainingMeta

export const Basic = {}
