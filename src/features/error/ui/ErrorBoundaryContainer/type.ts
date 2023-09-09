import { IErrorBoundaryAction } from '@/entities'
import { IDoubleTapProps } from '@/shared'

export interface IErrorBoundaryContainerProps extends IErrorBoundaryAction, Omit<IDoubleTapProps, 'onPress' | 'onDoublePress'> { }