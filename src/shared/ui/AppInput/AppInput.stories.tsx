import React, { FC } from 'react'
import { AppInput } from './AppInput'

const AppInputMeta = {
    title: 'Shared/AppInput',
    component: AppInput,
    decorators: [(Story: FC) => <Story />],
}

export default AppInputMeta

export const Basic = {
    args: {
        value: '',
        placeholder: 'Basic placeholder',
    },
}
