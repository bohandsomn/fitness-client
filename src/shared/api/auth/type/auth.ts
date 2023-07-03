import { ExceptionErrorResponseDto, ValidationErrorResponseDto } from '../../dto'
import { ILogInDto } from './logIn.dto'
import { IRegisterDto } from './register.dto'
import { IUserPayloadDto } from './userPayload.dto'

export interface IAuthApi {
    register(dto: IRegisterDto): Promise<IUserPayloadDto | ExceptionErrorResponseDto | ValidationErrorResponseDto<keyof IRegisterDto>>
    logIn(dto: ILogInDto): Promise<IUserPayloadDto | ExceptionErrorResponseDto | ValidationErrorResponseDto<keyof ILogInDto>>
    autoLogIn(): Promise<IUserPayloadDto | ExceptionErrorResponseDto>
    logOut(): Promise<void | ExceptionErrorResponseDto>
}