import { FC } from 'react'
import { IErrorBoundaryProps } from './type'
import { useErrorBoundary } from './useErrorBoundary'
import { ErrorBoundaryContainer } from '@/features'
import { ErrorBoundary as ErrorBoundaryEntity } from '@/entities'

export const ErrorBoundary: FC<IErrorBoundaryProps> = ({
    reload,
    close,
    header,
    isDark,
}) => {
    const {} = useErrorBoundary()
    return (
        <ErrorBoundaryContainer reload={reload} close={close}>
            <ErrorBoundaryEntity header={header} isDark={isDark} />
        </ErrorBoundaryContainer>
    )
}
