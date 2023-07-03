import { UserPayloadDto } from '../auth'
import { ExceptionErrorResponseDto, ValidationErrorResponseDto } from '../dto'
import { UpdateUserDto } from './dto'

export interface IUserApi {
    updateUser(dto: UpdateUserDto): Promise<UserPayloadDto | ExceptionErrorResponseDto | ValidationErrorResponseDto<keyof UpdateUserDto>>
}