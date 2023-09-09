import { UserDifficulty } from '@/shared'
import { toUserDifficulty } from '../mapper'

export const userDifficultyOptions = [
    {
        privateValue: UserDifficulty.BEGINNER,
        publicValue: toUserDifficulty(UserDifficulty.BEGINNER)
    },
    {
        privateValue: UserDifficulty.INTERMEDIATE,
        publicValue: toUserDifficulty(UserDifficulty.INTERMEDIATE)
    },
    {
        privateValue: UserDifficulty.ADVANCED,
        publicValue: toUserDifficulty(UserDifficulty.ADVANCED)
    },
]