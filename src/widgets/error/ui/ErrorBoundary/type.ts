import { IErrorBoundaryContainerProps } from '@/features'

export interface IErrorBoundaryProps extends Omit<IErrorBoundaryContainerProps, 'children'> {
    header?: string
    isDark?: boolean
}