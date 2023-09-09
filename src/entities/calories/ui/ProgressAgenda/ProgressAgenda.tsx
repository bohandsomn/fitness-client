import { FC } from 'react'
import { AppAgenda } from '@/shared'
import { IProgressAgendaProps } from './type'
import { useProgressAgenda } from './useProgressAgenda'
import { DailyProgress } from '../DailyProgress'

export const ProgressAgenda: FC<IProgressAgendaProps> = ({
    progressLink,
    errorBoundary,
}) => {
    const { currentDate, handleRefresh } = useProgressAgenda()
    return (
        <AppAgenda
            currentDate={currentDate}
            onChangeCurrentDate={handleRefresh}
            customHeader={progressLink}
            height="218px"
        >
            <DailyProgress errorBoundary={errorBoundary} />
        </AppAgenda>
    )
}
