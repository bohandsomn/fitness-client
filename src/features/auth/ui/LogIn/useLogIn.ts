import { useCallback } from 'react'
import { AuthConst, PageNames, useAppNavigation } from '@/shared'
import { useWelcomeStateUpdate } from '@/entities'

export const useLogIn = () => {
    const { check } = useWelcomeStateUpdate()
    const navigation = useAppNavigation()
    const handlePress = useCallback(() => {
        navigation.goTo(PageNames.LOG_IN)
        check()
    }, [check, navigation])
    const header = AuthConst.LOG_IN
    return {
        handlePress,
        header,
    }
}