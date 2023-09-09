import { FC } from 'react'
import { DoubleTap } from '@/shared'
import { IErrorBoundaryContainerProps } from './type'
import { useErrorBoundaryContainer } from './useErrorBoundaryContainer'

export const ErrorBoundaryContainer: FC<IErrorBoundaryContainerProps> = ({
    children,
    reload,
    close,
    ...props
}) => {
    const {} = useErrorBoundaryContainer()
    return (
        <DoubleTap onPress={reload} onDoublePress={close} {...props}>
            {children}
        </DoubleTap>
    )
}
