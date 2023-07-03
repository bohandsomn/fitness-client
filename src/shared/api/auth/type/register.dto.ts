import { UserDifficulty, UserGender } from '../../constants'

export interface IRegisterDto {
    readonly name: string
    readonly email: string
    readonly difficulty: UserDifficulty
    readonly height: number
    readonly weight: number
    readonly goalWeight: number
    readonly goalDate: Date
    readonly gender: UserGender
    readonly birthday: Date
    readonly password: string
}