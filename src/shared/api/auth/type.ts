import { ExceptionErrorResponseDto, ValidationErrorResponseDto } from '../dto'
import { LogInDto, CreateUserContext, UserPayloadDto, RegisterDto } from './dto'

export interface IAuthApi {
    register(dto: CreateUserContext): Promise<UserPayloadDto | ExceptionErrorResponseDto | ValidationErrorResponseDto<keyof RegisterDto>>
    logIn(dto: LogInDto): Promise<UserPayloadDto | ExceptionErrorResponseDto | ValidationErrorResponseDto<keyof LogInDto>>
    autoLogIn(): Promise<UserPayloadDto | ExceptionErrorResponseDto>
    logOut(): Promise<void | ExceptionErrorResponseDto>
}