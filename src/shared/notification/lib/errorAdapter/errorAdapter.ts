import { Exception } from '@/shared/exception'
import { ExceptionErrorResponseDto, ValidationErrorResponseDto } from '../../../api/dto'

export function errorAdapter<Property extends string>(
    error: ValidationErrorResponseDto<Property> | ExceptionErrorResponseDto
): string[] {
    if (ValidationErrorResponseDto.isValidationErrorResponse(error)) {
        const properties = Object.keys(error.message) as Property[]
        const errors = properties
            .map((property): string[] => error.message?.[property] || [])
            .reduce((errors, error) => [...errors, ...error])
        return errors
    }
    if (ExceptionErrorResponseDto.isExceptionErrorResponse(error)) {
        return [error.message]
    }
    throw new Exception(`Error ${error} is elusive`)
}