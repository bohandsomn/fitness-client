import { useHistoryStateSelector, useHistoryStateUpdate } from '@/entities'
import { errorAdapter } from '@/shared'
import { useEffect } from 'react'

export const useProgressExercises = () => {
    const state = useHistoryStateSelector((state) => state)
    const header = useHistoryStateSelector((state) => {
        const message = state.error || ''
        const header = errorAdapter({
            message,
        } as any).join('\n')
        return header
    })
    const { reload, close } = useHistoryStateUpdate()
    useEffect(() => {
        reload()
    }, [])
    return {
        state,
        reload,
        close,
        header,
    }
}