import { useEffect } from 'react'
import { useSetsStateSelector, useSetsStateUpdate } from '@/entities'

export const useSetsTraining = () => {
    const state = useSetsStateSelector((state) => state)
    const { reload, close } = useSetsStateUpdate()
    useEffect(() => {
        reload()
    }, [])
    return {
        state,
        reload,
        close
    }
}