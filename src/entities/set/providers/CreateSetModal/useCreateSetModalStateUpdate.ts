import { useCallback } from 'react'
import { useStateUpdate } from './context'
import { IUseCreateSetModalStateUpdateResult } from './type'

export const useCreateSetModalStateUpdate = (): IUseCreateSetModalStateUpdateResult => {
    const update = useStateUpdate()
    const closeModal = useCallback(() => {
        update({
            isModalVisible: false,
        })
    }, [update])
    const openModal = useCallback(() => {
        update({
            isModalVisible: true,
        })
    }, [update])
    return {
        openModal,
        closeModal,
    }
}