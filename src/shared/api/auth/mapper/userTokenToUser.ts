import { Exception } from '../../../exception'
import { tokenLocalStorage } from '../../../storage'
import { ExceptionErrorResponseDto, ValidationErrorResponseDto } from '../../dto'
import { UserTokenDto } from '../dto/userToken.dto'
import { IUserPayloadDto } from '../type/userPayload.dto'

export async function userTokenToUser<Property extends string>(
    data: unknown
): Promise<
    IUserPayloadDto |
    ValidationErrorResponseDto<Property> |
    ExceptionErrorResponseDto
> {
    if (
        ValidationErrorResponseDto.isValidationErrorResponse<Property>(data) ||
        ExceptionErrorResponseDto.isExceptionErrorResponse(data)
    ) {
        return data
    }
    if (
        UserTokenDto.isUserTokenDto(data)
    ) {
        await tokenLocalStorage.save(data.accessToken)
        return data.user
    }
    throw new Exception(`Data ${data} is not a user token`)
}