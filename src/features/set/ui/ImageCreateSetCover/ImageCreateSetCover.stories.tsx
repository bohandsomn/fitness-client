import React, { FC } from 'react'
import { CreateSetProvider } from '@/entities'
import { ImageCreateSetCover } from './ImageCreateSetCover'

const ImageCreateSetCoverMeta = {
    title: 'Features/Set/ImageCreateSetCover',
    component: ImageCreateSetCover,
    decorators: [
        (Story: FC) => (
            <CreateSetProvider>
                <Story />
            </CreateSetProvider>
        ),
    ],
}

export default ImageCreateSetCoverMeta

export const Basic = {}
