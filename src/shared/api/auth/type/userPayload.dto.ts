import { UserGender, UserDifficulty } from '../../constants'

export interface IUserPayloadDto {
    readonly name: string
    readonly email: string
    readonly difficulty: UserDifficulty
    readonly height: number
    readonly weight: number
    readonly goalWeight: number
    readonly goalDate: Date
    readonly gender: UserGender
    readonly registeredAt: Date
    readonly age: number
    readonly lostCalories: number
    readonly goalCalories: number
}