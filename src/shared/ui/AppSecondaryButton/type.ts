import { ReactNode } from 'react'
import { IViewProps } from 'native-base/lib/typescript/components/basic/View/types'

export interface IAppSecondaryButtonProps extends IViewProps {
    isWide?: boolean
    leftInnerIcon?: ReactNode
    children?: string
}