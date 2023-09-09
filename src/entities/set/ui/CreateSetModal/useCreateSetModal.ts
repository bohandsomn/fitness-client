import { SetConst } from '@/shared'
import { useCreateSetModalStateSelector, useCreateSetModalStateUpdate } from '../../providers'

export const useCreateSetModal = () => {
    const header = SetConst.CREATE_NEW_SET
    const open = useCreateSetModalStateSelector((state) => state.isModalVisible)
    const { closeModal: close } = useCreateSetModalStateUpdate()
    return {
        header,
        open,
        close,
    }
}