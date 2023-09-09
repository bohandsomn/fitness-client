import React, { FC } from 'react'
import { AppImage } from './AppImage'
import { generateSource } from '@/shared/lib'
import { mockSetPreview } from '@/entities'

const AppImageMeta = {
    title: 'Shared/AppImage',
    component: AppImage,
    decorators: [(Story: FC) => <Story />],
}

export default AppImageMeta

export const Basic = {
    args: {
        src: generateSource(mockSetPreview.demonstration),
        alt: 'App',
        width: '200',
        height: '200',
        quality: '0.7',
    },
}
