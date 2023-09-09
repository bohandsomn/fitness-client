import { useEffect } from 'react'
import { useCreateSet, useCreateSetModalStateUpdate, useCreateSetStateSelector } from '@/entities'
import { AppConst, PageNames, SetConst, SetException, errorAdapter, useAppNavigation, useNotification } from '@/shared'

export const useCreateSetLocal = () => {
    const { data, isLoading, error, call } = useCreateSet()
    const { closeModal } = useCreateSetModalStateUpdate()
    const state = useCreateSetStateSelector((state) => state)
    const notification = useNotification()
    const navigation = useAppNavigation()
    const handlePress = async () => {
        const { name, description, image } = state
        if (!name) {
            return notification.fail(SetException.EMPTY_NAME)
        }
        if (!description) {
            return notification.fail(SetException.EMPTY_DESCRIPTION)
        }
        if (!image) {
            return notification.fail(SetConst.ADD_COVER)
        }
        closeModal()
        await call({
            name,
            description,
            image,
        })
    }
    useEffect(() => {
        if (isLoading) {
            return
        }
        if (error) {
            const message = errorAdapter(error).join('\n')
            notification.fail(message)
        }
        if (data) {
            const id = data.id
            navigation.goTo(PageNames.SET, { id })
        }
    }, [data, isLoading, error])
    const header = AppConst.CREATE
    return {
        handlePress,
        header,
    }
}