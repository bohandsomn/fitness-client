import { FC } from 'react'
import { EnterNameAndEmail } from '@/widgets'
import { ICreateUserNameAndEmailProps } from './type'
import { useCreateUserNameAndEmail } from './useCreateUserNameAndEmail'

export const CreateUserNameAndEmail: FC<ICreateUserNameAndEmailProps> = () => {
    const {} = useCreateUserNameAndEmail()
    return <EnterNameAndEmail />
}
