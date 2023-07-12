import { FC } from 'react'
import { SelectDifficulty, SelectDifficultyProvider } from '@/entities'
import { ICreateUserDifficultyProps } from './type'
import { useCreateUserDifficulty } from './useCreateUserDifficulty'

export const CreateUserDifficulty: FC<ICreateUserDifficultyProps> = () => {
    const { selectDifficulty } = useCreateUserDifficulty()
    return (
        <SelectDifficultyProvider>
            <SelectDifficulty onChangeDifficulty={selectDifficulty} />
        </SelectDifficultyProvider>
    )
}
