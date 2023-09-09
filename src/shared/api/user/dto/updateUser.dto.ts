import { UserDifficulty, UserGender } from '../../constants'

export class UpdateUserDto {
    constructor(
        public readonly currentPassword: string,
        public readonly name?: string,
        public readonly email?: string,
        public readonly difficulty?: UserDifficulty,
        public readonly height?: number,
        public readonly weight?: number,
        public readonly goalWeight?: number,
        public readonly goalDate?: Date,
        public readonly gender?: UserGender,
        public readonly newPassword?: string,
    ) { }
}