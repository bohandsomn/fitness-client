import { useCallback } from 'react'
import { PageNames, useNavigation } from '@/shared'
import { useWelcomeStateUpdate } from '@/entities'

export const useLogIn = () => {
    const { check } = useWelcomeStateUpdate()
    const navigation = useNavigation()
    const handlePress = useCallback(() => {
        navigation.goTo(PageNames.LOG_IN)
        check()
    }, [check, navigation])
    return {
        handlePress
    }
}