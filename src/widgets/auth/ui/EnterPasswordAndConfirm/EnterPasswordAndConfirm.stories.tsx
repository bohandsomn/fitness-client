import React, { FC } from 'react'
import { EnterPasswordAndConfirm } from './EnterPasswordAndConfirm'

const EnterPasswordAndConfirmMeta = {
    title: 'Widgets/Auth/EnterPasswordAndConfirm',
    component: EnterPasswordAndConfirm,
    decorators: [(Story: FC) => <Story />],
}

export default EnterPasswordAndConfirmMeta

export const Basic = {}
