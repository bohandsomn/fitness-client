import { FC } from 'react'
import { SelectDifficulty } from '@/entities'
import { ICreateUserDifficultyProps } from './type'
import { useCreateUserDifficulty } from './useCreateUserDifficulty'

export const CreateUserDifficulty: FC<ICreateUserDifficultyProps> = () => {
    const { selectDifficulty } = useCreateUserDifficulty()
    return <SelectDifficulty onChangeDifficulty={selectDifficulty} />
}
