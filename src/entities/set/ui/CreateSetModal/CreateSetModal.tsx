import { FC } from 'react'
import { View } from 'native-base'
import { AppModal } from '@/shared'
import { ICreateSetModalProps } from './type'
import { useCreateSetModal } from './useCreateSetModal'

export const CreateSetModal: FC<ICreateSetModalProps> = ({
    setNameInput,
    setDescriptionInput,
    setImageButton,
    cancel,
    create,
}) => {
    const { header, open, close } = useCreateSetModal()
    return (
        <AppModal
            header={header}
            send={create}
            cancel={cancel}
            open={open}
            close={close}
            isBlur
        >
            <View marginBottom="18px">{setNameInput}</View>
            <View marginBottom="18px">{setDescriptionInput}</View>
            <View>{setImageButton}</View>
        </AppModal>
    )
}
