import { IErrorMessage, IGlobalState } from '@/entities'
import { CreateUserContext, LogInDto, UpdateUserDto, UserPayloadDto } from '@/shared'

export interface IUserModel {
    user: IGlobalState<UserPayloadDto>
    registerUser(context: CreateUserContext): Promise<UserPayloadDto | IErrorMessage>
    logInUser(dto: LogInDto): Promise<UserPayloadDto | IErrorMessage>
    autoLogInUser(): Promise<UserPayloadDto | IErrorMessage>
    logOutUser(): Promise<void | IErrorMessage>
    updateUser(dto: UpdateUserDto): Promise<UserPayloadDto | IErrorMessage>
}