import { useCallback } from 'react'
import { useSelectDifficultyStateSelector, useSelectDifficultyStateUpdate } from '@/entities/user'
import { ISelectDifficultyProps } from './type'
import { UserDifficulty } from '@/shared'

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
    return {
        difficulty,
        options,
        handleChangeDifficulty,
    }
}