import { UserDifficulty } from '@/shared'

export function toUserDifficulty(difficulty: UserDifficulty): string {
    switch (difficulty) {
        case UserDifficulty.BEGINNER:
            return 'Beginner'
        case UserDifficulty.INTERMEDIATE:
            return 'Intermediate'
        case UserDifficulty.ADVANCED:
            return 'Advanced'
    }
}