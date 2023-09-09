import { FC } from 'react'
import { EnterHeight } from '@/widgets'
import { ICreateUserHeightProps } from './type'
import { useCreateUserHeight } from './useCreateUserHeight'

export const CreateUserHeight: FC<ICreateUserHeightProps> = () => {
    const {} = useCreateUserHeight()
    return <EnterHeight />
}
