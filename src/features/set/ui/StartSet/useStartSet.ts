import { useSetPreviewStateSelector } from '@/entities'
import { PageNames, SetConst, useAppNavigation } from '@/shared'

export const useStartSet = () => {
    const id = useSetPreviewStateSelector((state) => state.id)
    const navigation = useAppNavigation()
    const handlePress = () => {
        navigation.goTo(PageNames.TRAINING, { id })
    }
    const header = SetConst.START
    return {
        handlePress,
        header,
    }
}