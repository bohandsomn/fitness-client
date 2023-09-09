import React, { FC } from 'react'
import { AddIcon } from 'native-base'
import { AppSecondaryButton } from './AppSecondaryButton'

const AppSecondaryButtonMeta = {
    title: 'Shared/AppSecondaryButton',
    component: AppSecondaryButton,
    decorators: [(Story: FC) => <Story />],
}

export default AppSecondaryButtonMeta

export const Basic = {
    args: {
        children: 'children',
    },
}

export const Wide = {
    args: {
        children: 'children',
        isWide: true,
    },
}

export const LeftInnerIcon = {
    args: {
        children: 'children',
        leftInnerIcon: <AddIcon />,
    },
}

export const WideLeftInnerIcon = {
    args: {
        children: 'children',
        leftInnerIcon: <AddIcon />,
        isWide: true,
    },
}
