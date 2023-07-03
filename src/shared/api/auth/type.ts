import { ExceptionErrorResponseDto, ValidationErrorResponseDto } from '../dto'
import { LogInDto, RegisterDto, UserPayloadDto } from './dto'

export interface IAuthApi {
    register(dto: RegisterDto): Promise<UserPayloadDto | ExceptionErrorResponseDto | ValidationErrorResponseDto<keyof RegisterDto>>
    logIn(dto: LogInDto): Promise<UserPayloadDto | ExceptionErrorResponseDto | ValidationErrorResponseDto<keyof LogInDto>>
    autoLogIn(): Promise<UserPayloadDto | ExceptionErrorResponseDto>
    logOut(): Promise<void | ExceptionErrorResponseDto>
}