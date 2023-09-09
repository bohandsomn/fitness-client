import { ReactNode } from 'react'
import { IViewProps } from 'native-base/lib/typescript/components/basic/View/types'

export interface IDailyProgressProps extends Omit<IViewProps, 'padding'> {
    errorBoundary: ReactNode
}