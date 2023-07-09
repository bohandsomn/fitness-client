import { ReactElement, PropsWithChildren } from 'react'

export interface IWithStepControllerProps extends PropsWithChildren {
    rightStepProgressElement?: ReactElement
    previousStepLabel?: ReactElement
    nextStepLabel?: ReactElement
    handleConfirm?: () => void
}