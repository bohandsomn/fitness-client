import { useSetPreviewStateSelector } from '@/entities'
import { PageNames, SetConst, useAppNavigation } from '@/shared'

export const useReadMoreSet = () => {
    const id = useSetPreviewStateSelector((state) => state.id)
    const navigation = useAppNavigation()
    const handlePress = () => {
        navigation.goTo(PageNames.SET, { id })
    }
    const header = SetConst.READ_MORE
    return {
        handlePress,
        header,
    }
}