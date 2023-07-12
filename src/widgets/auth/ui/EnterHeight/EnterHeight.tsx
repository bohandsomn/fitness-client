import { FC } from 'react'
import { HeightCreateUserField } from '@/features'
import { EnterHeight as EnterHeightEntity } from '@/entities'
import { IEnterHeightProps } from './type'
import { useEnterHeight } from './useEnterHeight'

export const EnterHeight: FC<IEnterHeightProps> = () => {
    const {} = useEnterHeight()
    return <EnterHeightEntity heightField={<HeightCreateUserField />} />
}
