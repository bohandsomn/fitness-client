import { FC } from 'react'
import { SelectGender, SelectGenderProvider } from '@/entities'
import { ICreateUserGenderProps } from './type'
import { useCreateUserGender } from './useCreateUserGender'

export const CreateUserGender: FC<ICreateUserGenderProps> = () => {
    const { selectGender } = useCreateUserGender()
    return (
        <SelectGenderProvider>
            <SelectGender onChangeGender={selectGender} />
        </SelectGenderProvider>
    )
}
