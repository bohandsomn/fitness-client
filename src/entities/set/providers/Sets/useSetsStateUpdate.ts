import { useCallback } from 'react'
import { useGetSets } from '../../libs'
import { useStateUpdate } from './context'
import { IUseSetsStateUpdateResult } from './type'
import { SetPreviewDto, handleClose, handleData, handleError, handleLoading } from '@/shared'

export const useSetsStateUpdate = (): IUseSetsStateUpdateResult => {
    const update = useStateUpdate()
    const { call } = useGetSets()
    const reload = useCallback(async () => {
        update(handleLoading<SetPreviewDto[]>())
        const response = await call()
        if (Array.isArray(response)) {
            update(handleData<SetPreviewDto[]>(response))
        } else {
            update(handleError<SetPreviewDto[]>(response.message))
        }
    }, [update, call])
    const close = useCallback(async () => {
        update(handleClose<SetPreviewDto[]>())
    }, [update])
    return {
        reload,
        close,
    }
}