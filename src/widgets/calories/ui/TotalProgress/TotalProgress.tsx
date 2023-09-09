import { FC } from 'react'
import { ErrorBoundary } from '@/widgets/error'
import { TotalProgress as TotalProgressEntity } from '@/entities'
import { ITotalProgressProps } from './type'
import { useTotalProgress } from './useTotalProgress'

export const TotalProgress: FC<ITotalProgressProps> = () => {
    const { header, reload, close } = useTotalProgress()
    return (
        <TotalProgressEntity
            errorBoundary={
                <ErrorBoundary header={header} reload={reload} close={close} />
            }
        />
    )
}
