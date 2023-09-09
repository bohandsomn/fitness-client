import { UserGender } from '../constants'

export function isUserGender(data: unknown): data is UserGender {
    if (
        data === UserGender.MALE ||
        data === UserGender.FEMALE
    ) {
        return true
    }
    return false
}