import { FC } from 'react'
import { AppButton } from '@/shared'
import { IReadMoreSetProps } from './type'
import { useReadMoreSet } from './useReadMoreSet'

export const ReadMoreSet: FC<IReadMoreSetProps> = () => {
    const { handlePress, header } = useReadMoreSet()
    return <AppButton onPress={handlePress}>{header}</AppButton>
}
