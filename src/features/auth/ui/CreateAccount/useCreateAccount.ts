import { useCallback } from 'react'
import { PageNames, useNavigation } from '@/shared'
import { useWelcomeStateUpdate } from '@/entities'

export const useCreateAccount = () => {
    const { check } = useWelcomeStateUpdate()
    const navigation = useNavigation()
    const handlePress = useCallback(() => {
        navigation.goTo(PageNames.CREATE_ACCOUNT)
        check()
    }, [check, navigation])
    return {
        handlePress
    }
}