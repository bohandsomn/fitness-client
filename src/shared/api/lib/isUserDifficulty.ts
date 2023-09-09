import { UserDifficulty } from '../constants'

export function isUserDifficulty(data: unknown): data is UserDifficulty {
    if (
        data === UserDifficulty.BEGINNER ||
        data === UserDifficulty.INTERMEDIATE ||
        data === UserDifficulty.ADVANCED
    ) {
        return true
    }
    return false
}