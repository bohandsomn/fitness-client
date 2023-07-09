import { UserGender } from '@/shared'

export function toUserGender(gender: UserGender): string {
    switch (gender) {
        case UserGender.MALE:
            return 'Male'
        case UserGender.FEMALE:
            return 'Female'
    }
}