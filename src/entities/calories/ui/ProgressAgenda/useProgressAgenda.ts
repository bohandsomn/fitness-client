import { useEffect } from 'react'
import { useLostCaloriesStateSelector, useLostCaloriesStateUpdate } from '../../providers'
import { AppDate, localeDateAdapter } from '@/shared'

export const useProgressAgenda = () => {
    const currentDate = useLostCaloriesStateSelector((state) => state.data?.currentDate ?? localeDateAdapter(new AppDate()))
    const { handleRefresh } = useLostCaloriesStateUpdate()
    useEffect(() => {
        handleRefresh(localeDateAdapter(new AppDate()))
    }, [])
    return {
        currentDate,
        handleRefresh,
    }
}