import React, { FC } from 'react'
import { AddIcon } from 'native-base'
import { CreateSetModal } from './CreateSetModal'
import { CreateSetModalProvider } from '../../providers'
import { AppButton, AppInput, AppSecondaryButton, SetConst } from '@/shared'

const CreateSetModalMeta = {
    title: 'Entities/Set/CreateSetModal',
    component: CreateSetModal,
    decorators: [
        (Story: FC) => (
            <CreateSetModalProvider>
                <Story />
            </CreateSetModalProvider>
        ),
    ],
}

export default CreateSetModalMeta

export const Basic = {
    args: {
        setNameInput: <AppInput placeholder={SetConst.SET_NAME} />,
        setDescriptionInput: (
            <AppInput placeholder={SetConst.ADD_DESCRIPTION} />
        ),
        setImageButton: (
            <AppSecondaryButton isWide leftInnerIcon={<AddIcon />}>
                {SetConst.ADD_COVER}
            </AppSecondaryButton>
        ),
        cancel: <AppButton>Cancel</AppButton>,
        create: <AppButton isDark>Create</AppButton>,
    },
}
