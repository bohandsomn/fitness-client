import { FC } from 'react'
import { EnterPasswordAndConfirm } from '@/widgets'
import { ICreateUserPasswordProps } from './type'
import { useCreateUserPassword } from './useCreateUserPassword'

export const CreateUserPassword: FC<ICreateUserPasswordProps> = () => {
    const {} = useCreateUserPassword()
    return <EnterPasswordAndConfirm />
}
