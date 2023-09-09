import { useCallback } from 'react'
import { AuthConst, PageNames, useAppNavigation } from '@/shared'
import { useWelcomeStateUpdate } from '@/entities'

export const useCreateAccount = () => {
    const { check } = useWelcomeStateUpdate()
    const navigation = useAppNavigation()
    const handlePress = useCallback(() => {
        navigation.goTo(PageNames.CREATE_ACCOUNT)
        check()
    }, [check, navigation])
    const header = AuthConst.CREATE_AN_ACCOUNT
    return {
        handlePress,
        header,
    }
}