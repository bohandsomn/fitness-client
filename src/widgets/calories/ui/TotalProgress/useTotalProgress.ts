import { useEffect } from 'react'
import { useLostCaloriesStateSelector, useLostCaloriesStateUpdate } from '@/entities'
import { errorAdapter } from '@/shared'

export const useTotalProgress = () => {
    const { reload, close } = useLostCaloriesStateUpdate(true)
    useEffect(() => {
        reload()
    }, [])
    const header = useLostCaloriesStateSelector((state) => {
        const message = state.error || ''
        const header = errorAdapter({
            message,
        } as any).join('\n')
        return header
    })
    return {
        header,
        reload,
        close,
    }
}