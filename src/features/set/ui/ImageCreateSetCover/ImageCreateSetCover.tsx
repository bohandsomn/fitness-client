import { FC } from 'react'
import { Text, View } from 'native-base'
import { IImageCreateSetCoverProps } from './type'
import { useImageCreateSetCover } from './useImageCreateSetCover'
import { AppSecondaryButton } from '@/shared'

export const ImageCreateSetCover: FC<IImageCreateSetCoverProps> = () => {
    const { handleSetImage, icon, header } = useImageCreateSetCover()
    return (
        <AppSecondaryButton
            leftInnerIcon={icon}
            isWide
            onTouchStart={handleSetImage}
        >
            {header}
        </AppSecondaryButton>
    )
}
