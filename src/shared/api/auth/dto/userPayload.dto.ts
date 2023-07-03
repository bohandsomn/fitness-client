import { UserGender, UserDifficulty } from '../../constants'

export class UserPayloadDto {
    constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly difficulty: UserDifficulty,
        public readonly height: number,
        public readonly weight: number,
        public readonly goalWeight: number,
        public readonly goalDate: Date,
        public readonly gender: UserGender,
        public readonly registeredAt: Date,
        public readonly age: number,
        public readonly lostCalories: number,
        public readonly goalCalories: number,
    ) { }
}