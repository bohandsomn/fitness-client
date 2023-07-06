import React from 'react'
import { AppButton } from './AppButton'

const AppButtonMeta = {
    title: 'Shared/AppButton',
    component: AppButton,
    decorators: [(Story: typeof AppButton) => <Story />],
}

export default AppButtonMeta

export const Basic = {
    args: {
        children: 'Basic',
    },
}
export const Wide = {
    args: {
        isWide: true,
        children: 'Wide',
    },
}
export const Dark = {
    args: {
        isDark: true,
        children: 'Dark',
    },
}
export const WideDark = {
    args: {
        isWide: true,
        isDark: true,
        children: 'Wide Dark',
    },
}
export const WideLight = {
    args: {
        isWide: true,
        isDark: false,
        children: 'Wide Light',
    },
}
export const NarrowDark = {
    args: {
        isWide: false,
        isDark: true,
        children: 'Narrow Dark',
    },
}
export const NarrowLight = {
    args: {
        isWide: false,
        isDark: false,
        children: 'Narrow Light',
    },
}
