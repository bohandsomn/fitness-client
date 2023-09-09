import { ISODate } from '../../../lib'
import { UserDifficulty, UserGender } from '../../constants'

export class CreateUserContext {
    constructor(
        public name: string | null,
        public email: string | null,
        public difficulty: UserDifficulty | null,
        public height: number | null,
        public weight: number | null,
        public goalWeight: number | null,
        public goalDate: ISODate | null,
        public gender: UserGender | null,
        public birthday: ISODate | null,
        public password: string | null,
        public confirmPassword: string | null,
    ) { }
}