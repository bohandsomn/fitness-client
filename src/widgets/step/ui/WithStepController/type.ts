import { View } from 'native-base'
import { ReactElement } from 'react'

type IViewProps = NonNullable<typeof View.defaultProps>

export interface IWithStepControllerProps extends IViewProps {
    rightStepProgressElement?: ReactElement
    previousStepLabel?: ReactElement
    nextStepLabel?: ReactElement
    handleConfirm?: () => void
}