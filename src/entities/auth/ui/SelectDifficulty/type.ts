import { UserDifficulty } from '@/shared'

export interface ISelectDifficultyProps {
    onChangeDifficulty(difficulty: UserDifficulty): void
}