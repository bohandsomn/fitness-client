import React, { FC } from 'react'
import { AppBlur } from './AppBlur'

const AppBlurMeta = {
    title: 'Shared/AppBlur',
    component: AppBlur,
    decorators: [(Story: FC) => <Story />],
}

export default AppBlurMeta

export const Basic = {}
