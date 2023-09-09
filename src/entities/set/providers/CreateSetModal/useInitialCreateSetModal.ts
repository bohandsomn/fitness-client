import { useMemo } from 'react'
import { ICreateSetModalOptimizedContext } from './type'

export const useInitialCreateSetModal = (): ICreateSetModalOptimizedContext => {
    return useMemo(() => ({
        isModalVisible: false,
    }), [])
}