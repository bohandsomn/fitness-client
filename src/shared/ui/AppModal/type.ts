import { PropsWithChildren } from 'react'
import { IViewProps } from 'native-base/lib/typescript/components/basic/View/types'

export interface IAppModalProps extends PropsWithChildren {
    header: string
    send: JSX.Element
    cancel: JSX.Element
    open: boolean
    close: () => void
    isBlur?: boolean
    isLight?: boolean
    /**
     * Default value - "90%"
     */
    width?: IViewProps['height']
    height?: IViewProps['height']
}