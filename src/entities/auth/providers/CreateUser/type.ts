import { UserDifficulty, UserGender } from '@/shared'

export interface ICreateUserOptimizedContext {
    name: string | null
    email: string | null
    difficulty: UserDifficulty | null,
    height: number | null
    weight: number | null
    goalWeight: number | null
    goalDate: Date | null
    gender: UserGender | null
    birthday: Date | null
    password: string | null
    confirmPassword: string | null
}

export interface IUseCreateUserStateUpdateResult {
    selectGender(gender: UserGender): void
    changeName(name: string): void
    changeEmail(email: string): void
    changePassword(password: string): void
    changeConfirmPassword(confirmPassword: string): void
    selectDifficulty(difficulty: UserDifficulty): void
    changeWeight(weight: number): void
    changeGoalWeight(goalWeight: number): void
    changeHeight(height: number): void
    changeGoalDate(goalDate: Date): void
    changeBirthday(birthday: Date): void
}
