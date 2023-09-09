import { UserGender, UserDifficulty } from '../../constants'
import { isUserDifficulty, isUserGender } from '../../lib'

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

    static isUserPayload(data: unknown): data is UserPayloadDto {
        if (typeof data !== 'object' || data === null) {
            return false
        }
        const {
            name,
            email,
            difficulty,
            height,
            weight,
            goalWeight,
            goalDate,
            gender,
            registeredAt,
            age,
            lostCalories,
            goalCalories,
        } = (data as Partial<UserPayloadDto>)
        if (typeof name !== 'string') {
            return false
        }
        if (typeof email !== 'string') {
            return false
        }
        if (!isUserDifficulty(difficulty)) {
            return false
        }
        if (typeof height !== 'number') {
            return false
        }
        if (typeof weight !== 'number') {
            return false
        }
        if (typeof goalWeight !== 'number') {
            return false
        }
        if (typeof goalDate !== 'string') {
            return false
        }
        if (!isUserGender(gender)) {
            return false
        }
        if (typeof registeredAt !== 'string') {
            return false
        }
        if (typeof age !== 'number') {
            return false
        }
        if (typeof lostCalories !== 'number') {
            return false
        }
        if (typeof goalCalories !== 'number') {
            return false
        }
        return true
    }
}