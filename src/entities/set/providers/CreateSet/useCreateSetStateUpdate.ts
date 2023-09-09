import { useCallback } from 'react'
import { pickImage } from '@/shared'
import { useStateUpdate } from './context'
import { IUseCreateSetStateUpdateResult } from './type'

export const useCreateSetStateUpdate = (): IUseCreateSetStateUpdateResult => {
    const update = useStateUpdate()
    const handleChangeName = useCallback((name: string) => {
        update({ name })
    }, [update])
    const handleChangeDescription = useCallback((description: string) => {
        update({ description })
    }, [update])
    const handleSetImage = useCallback(async () => {
        const image = await pickImage()
        update({ image })
    }, [update])
    return {
        handleChangeName,
        handleChangeDescription,
        handleSetImage,
    }
}