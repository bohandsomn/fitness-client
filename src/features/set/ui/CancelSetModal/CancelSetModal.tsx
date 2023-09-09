import { FC } from 'react'
import { AppButton } from '@/shared'
import { ICancelSetModalProps } from './type'
import { useCancelSetModal } from './useCancelSetModal'

export const CancelSetModal: FC<ICancelSetModalProps> = () => {
    const { handlePress, header } = useCancelSetModal()
    return <AppButton onPress={handlePress}>{header}</AppButton>
}
