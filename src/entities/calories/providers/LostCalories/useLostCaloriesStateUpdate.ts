import { useCallback } from 'react'
import { AppDate, GetProgressInCaloriesDTO, LocaleDate, handleClose, handleData, handleError, handleLoading, localeDateAdapter } from '@/shared'
import { useStateUpdate } from './context'
import { ILostCaloriesOptimizedContext, IUseLostCaloriesStateUpdateResult } from './type'
import { getDayInterval, useGetProgressInCalories } from '../../lib'

export const useLostCaloriesStateUpdate = (isFullRange = false): IUseLostCaloriesStateUpdateResult => {
    const update = useStateUpdate()
    const { call } = useGetProgressInCalories()
    const handleCall = useCallback(async (dto: Partial<GetProgressInCaloriesDTO> = {}) => {
        update(handleLoading<NonNullable<ILostCaloriesOptimizedContext['data']>>())
        const response = await call(dto)
        if (!Array.isArray(response)) {
            update(handleError<NonNullable<ILostCaloriesOptimizedContext['data']>>(response.message))
            return
        }
        const progress = isFullRange
            ? response.reduce((accumulator, current) => ({
                lostCalories: accumulator.lostCalories + current.lostCalories,
                goalCalories: accumulator.goalCalories + current.goalCalories,
                date: current.date,
            }))
            : response.at(-1)
        if (!progress) {
            return
        }
        const { goalCalories, lostCalories, date } = progress
        update(handleData({
            currentDate: localeDateAdapter(new AppDate(date)),
            lostCalories,
            goalCalories,
        }))
    }, [update, call, isFullRange])
    const handleRefresh = useCallback(async (currentDate: LocaleDate) => {
        if (isFullRange) {
            await handleCall()
            return
        }
        const { startDate, endDate } = getDayInterval(new AppDate(currentDate))
        await handleCall({ startDate, endDate })
    }, [handleCall, isFullRange])
    const reload = useCallback(async () => {
        if (isFullRange) {
            await handleCall()
            return
        }
        const { startDate, endDate } = getDayInterval(new AppDate())
        await handleCall({ startDate, endDate })
    }, [handleCall, isFullRange])
    const close = useCallback(async () => {
        update(handleClose<NonNullable<ILostCaloriesOptimizedContext['data']>>())
    }, [update])
    return {
        handleRefresh,
        reload,
        close,
    }
}