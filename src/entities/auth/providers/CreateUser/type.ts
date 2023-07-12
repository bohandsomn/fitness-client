import { CreateUserContext, ISODate, UserDifficulty, UserGender } from '@/shared'

export interface ICreateUserOptimizedContext extends CreateUserContext { }

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
    changeGoalDate(goalDate: ISODate): void
    changeBirthday(birthday: ISODate): void
}
