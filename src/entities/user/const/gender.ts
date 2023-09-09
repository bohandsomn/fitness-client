import { UserGender } from '@/shared'
import { toUserGender } from '../mapper'

export const userGenderOptions = [
    {
        privateValue: UserGender.MALE,
        publicValue: toUserGender(UserGender.MALE)
    },
    {
        privateValue: UserGender.FEMALE,
        publicValue: toUserGender(UserGender.FEMALE)
    },
]