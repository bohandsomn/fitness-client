import React, { FC } from 'react'
import { AppNumberInput } from './AppNumberInput'

const AppNumberInputMeta = {
    title: 'Shared/AppNumberInput',
    component: AppNumberInput,
    decorators: [(Story: FC) => <Story />],
}

export default AppNumberInputMeta

export const Basic = {
    args: {
        value: '',
        onChangeText: (value: string) => {},
    },
}

export const Kg = {
    args: {
        value: '',
        onChangeText: (value: string) => {},
        rightText: 'kg',
    },
}
