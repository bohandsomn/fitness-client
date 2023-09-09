import { useCallback } from 'react'
import { useSelectDifficultyStateSelector, useSelectDifficultyStateUpdate } from '@/entities/user'
import { AuthConst, UserDifficulty } from '@/shared'
import { ISelectDifficultyProps } from './type'

export const useSelectDifficulty = ({
    onChangeDifficulty,
}: Pick<ISelectDifficultyProps, 'onChangeDifficulty'>) => {
    const difficulty = useSelectDifficultyStateSelector((state): string => state.value || '')
    const options = useSelectDifficultyStateSelector((state) => state.options)
    const { select } = useSelectDifficultyStateUpdate()
    const handleChangeDifficulty = useCallback((difficulty: UserDifficulty) => {
        select(difficulty)
        onChangeDifficulty?.(difficulty)
    }, [select, onChangeDifficulty])
    const header = AuthConst.SELECT_YOUR_DIFFICULTY
    return {
        difficulty,
        options,
        handleChangeDifficulty,
        header,
    }
}