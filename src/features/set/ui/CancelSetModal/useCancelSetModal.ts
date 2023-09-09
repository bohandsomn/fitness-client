import { useCreateSetModalStateUpdate } from '@/entities'
import { AppConst } from '@/shared'

export const useCancelSetModal = () => {
    const { closeModal: close } = useCreateSetModalStateUpdate()
    const handlePress = () => {
        close()
    }
    const header = AppConst.CANCEL
    return {
        handlePress,
        header,
    }
}