import { isUserDifficulty, isUserGender } from '../../lib'
import { UserPayloadDto } from './userPayload.dto'

export class UserTokenDto {
    constructor(
        public readonly user: UserPayloadDto,
        public readonly accessToken: string,
    ) { }

    static isUserTokenDto(data: unknown): data is UserTokenDto {
        if (typeof data !== 'object' || data === null) {
            return false
        }
        const user = (data as Partial<UserTokenDto>)?.user
        const accessToken = (data as Partial<UserTokenDto>)?.accessToken
        if (typeof accessToken !== 'string') {
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
        } = user || {}
        if (typeof name !== 'string') {
            return false
        }
        if (typeof email !== 'string') {
            return false
        }
        if (typeof difficulty !== 'string') {
            return false
        }
        if (!isUserGender(gender)) {
            return false
        }
        if (!isUserDifficulty(difficulty)) {
            return false
        }
        if (
            typeof height !== 'number' ||
            typeof weight !== 'number' ||
            typeof goalWeight !== 'number' ||
            typeof age !== 'number' ||
            typeof lostCalories !== 'number' ||
            typeof goalCalories !== 'number'
        ) {
            return false
        }
        if (
            goalDate === undefined ||
            registeredAt === undefined
        ) {
            return false
        }
        return true
    }
}