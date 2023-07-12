import { FC } from 'react'
import { ChooseBirthDate } from '@/widgets'
import { ICreateUserBirthdayProps } from './type'
import { useCreateUserBirthday } from './useCreateUserBirthday'

export const CreateUserBirthday: FC<ICreateUserBirthdayProps> = () => {
    const {} = useCreateUserBirthday()
    return <ChooseBirthDate />
}
