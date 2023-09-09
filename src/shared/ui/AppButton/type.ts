import { PropsWithChildren } from 'react'
import { IButtonProps } from 'native-base'

export interface IAppButton extends
    PropsWithChildren,
    Omit<IButtonProps, 'children'> {
    isWide?: boolean
    isDark?: boolean
}