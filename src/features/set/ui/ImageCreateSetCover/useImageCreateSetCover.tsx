import { AddIcon, CheckIcon } from 'native-base'
import { useCreateSetStateSelector, useCreateSetStateUpdate } from '@/entities'
import { SetConst } from '@/shared'

export const useImageCreateSetCover = () => {
    const image = useCreateSetStateSelector((state) => state.image)
    const { handleSetImage } = useCreateSetStateUpdate()
    const isSelected = !!image
    const icon = isSelected ? <CheckIcon /> : <AddIcon />
    const header = isSelected ? SetConst.CHANGE_COVER : SetConst.ADD_COVER
    return {
        handleSetImage,
        icon,
        header,
    }
}
