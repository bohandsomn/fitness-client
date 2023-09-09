import { FC } from 'react'
import {
    CancelSetModal,
    CreateSet,
    DescriptionCreateSetField,
    ImageCreateSetCover,
    NameCreateSetField,
} from '@/features'
import { CreateSetModal as CreateSetModalEntity } from '@/entities'
import { ICreateSetModalProps } from './type'
import { useCreateSetModal } from './useCreateSetModal'

export const CreateSetModal: FC<ICreateSetModalProps> = () => {
    const {} = useCreateSetModal()
    return (
        <CreateSetModalEntity
            setNameInput={<NameCreateSetField />}
            setDescriptionInput={<DescriptionCreateSetField />}
            setImageButton={<ImageCreateSetCover />}
            cancel={<CancelSetModal />}
            create={<CreateSet />}
        />
    )
}
