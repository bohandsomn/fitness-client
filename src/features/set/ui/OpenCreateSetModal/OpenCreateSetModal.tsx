import { FC } from 'react'
import { AddIcon, View } from 'native-base'
import { AppSecondaryButton } from '@/shared'
import { IOpenCreateSetModalProps } from './type'
import { useOpenCreateSetModal } from './useOpenCreateSetModal'

export const OpenCreateSetModal: FC<IOpenCreateSetModalProps> = () => {
    const { handlePress, header, open, bottom } = useOpenCreateSetModal()
    if (open) {
        return null
    }
    return (
        <View flex="1">
            <View position="absolute" bottom={bottom} alignSelf="flex-end">
                <AppSecondaryButton
                    leftInnerIcon={<AddIcon />}
                    onTouchStart={handlePress}
                >
                    {header}
                </AppSecondaryButton>
            </View>
        </View>
    )
}
