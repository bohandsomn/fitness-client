import { Dimensions } from 'react-native'
import { useCreateSetModalStateSelector, useCreateSetModalStateUpdate } from '@/entities'
import { SetConst } from '@/shared'

export const useOpenCreateSetModal = () => {
    const { openModal } = useCreateSetModalStateUpdate()
    const open = useCreateSetModalStateSelector((state) => state.isModalVisible)
    const handlePress = () => {
        openModal()
    }
    const header = SetConst.NEW_SET
    const windowSize = Dimensions.get('window')
    const windowHeight = windowSize.height
    const DISTANCE_BETWEEN_BUTTON_AND_BOTTOM = 77 + 16 * 2 + 16 // height + paddingY * 2 + margin
    const HEIGHT_OF_BUTTON = 53 + 16 * 2 // height + paddingY * 2 
    const STOCHASTIC = 56 // stochastic component
    const distanceBetweenTopAndBottom = windowHeight - DISTANCE_BETWEEN_BUTTON_AND_BOTTOM - HEIGHT_OF_BUTTON + STOCHASTIC
    const bottom = -distanceBetweenTopAndBottom
    return {
        handlePress,
        header,
        open,
        bottom,
    }
}