import { FC } from 'react'
import { ProgressLink } from '@/features'
import { ProgressAgenda as ProgressAgendaEntity } from '@/entities'
import { IProgressAgendaProps } from './type'
import { useProgressAgenda } from './useProgressAgenda'
import { ErrorBoundary } from '@/widgets/error'

export const ProgressAgenda: FC<IProgressAgendaProps> = () => {
    const { reload, close, header } = useProgressAgenda()
    return (
        <ProgressAgendaEntity
            progressLink={<ProgressLink />}
            errorBoundary={
                <ErrorBoundary
                    reload={reload}
                    close={close}
                    header={header}
                    isDark
                />
            }
        />
    )
}
