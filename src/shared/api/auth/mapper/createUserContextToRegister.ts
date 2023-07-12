import { CreateUserContext, RegisterDto } from '../dto'

export function createUserContextToRegister({
    name,
    email,
    difficulty,
    height,
    weight,
    goalWeight,
    goalDate,
    gender,
    birthday,
    password,
    confirmPassword,
}: CreateUserContext): RegisterDto | null {
    if (
        !name ||
        !email ||
        !difficulty ||
        !height ||
        !weight ||
        !goalWeight ||
        !goalDate ||
        !gender ||
        !birthday ||
        !password ||
        !confirmPassword
    ) {
        return null
    }
    return {
        name,
        email,
        difficulty,
        height,
        weight,
        goalWeight,
        goalDate: new Date(goalDate),
        gender,
        birthday: new Date(birthday),
        password,
    }
}