import { useCallback } from 'react'
import { useGetHistory } from '@/entities/exercise'
import { AppDate, ExceptionErrorResponseDto, GetUserHistoryDto, HistoryDto, ISODate, ValidationErrorResponseDto, errorAdapter, handleClose, handleData, handleError, handleLoading, useAppNavigation, usePageNavigation } from '@/shared'
import { useStateUpdate } from './context'
import { IUseHistoryStateUpdateResult } from './type'

export const useHistoryStateUpdate = (): IUseHistoryStateUpdateResult => {
    const update = useStateUpdate()
    const { call } = useGetHistory()
    const pageNavigation = usePageNavigation()
    const navigation = useAppNavigation()
    const options = pageNavigation.options
    const date = options?.date as ISODate | undefined
    const reload = useCallback(async () => {
        update(handleLoading<HistoryDto>())
        const response = await call({
            date: date
                ? new AppDate(date)
                : new AppDate()
        })
        if (
            ValidationErrorResponseDto.isValidationErrorResponse<keyof GetUserHistoryDto>(response) ||
            ExceptionErrorResponseDto.isExceptionErrorResponse(response)
        ) {
            const error = errorAdapter(response).join('\n')
            update(handleError<HistoryDto>(error))
            return
        }
        update(handleData(response))
    }, [update, date, call])
    const close = useCallback(async () => {
        update(handleClose<HistoryDto>())
    }, [update])
    const handleRefresh = useCallback(async (date: ISODate) => {
        navigation.updateParams({
            date,
        })
        await reload()
    }, [navigation, reload])
    return {
        handleRefresh,
        reload,
        close,
    }
}