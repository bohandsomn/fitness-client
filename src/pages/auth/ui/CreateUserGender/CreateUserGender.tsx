import { FC } from 'react'
import { SelectGender } from '@/entities'
import { ICreateUserGenderProps } from './type'
import { useCreateUserGender } from './useCreateUserGender'

export const CreateUserGender: FC<ICreateUserGenderProps> = () => {
    const { selectGender } = useCreateUserGender()
    return <SelectGender onChangeGender={selectGender} />
}
