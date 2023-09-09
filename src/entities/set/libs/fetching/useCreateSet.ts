import { CreateSetDto, ExceptionErrorResponseDto, SetKey, SetPreviewDto, ValidationErrorResponseDto, setApi } from '@/shared'
import { useMutation, UseMutationResult } from 'react-query'

export const useCreateSet = () => {
    const { data = null, isLoading, error, mutateAsync } = useMutation({
        mutationKey: SetKey.CREATE_SET,
        async mutationFn(dto) {
            const response = await setApi.createSet(dto)
            if (
                ValidationErrorResponseDto.isValidationErrorResponse(response) ||
                ExceptionErrorResponseDto.isExceptionErrorResponse(response)
            ) {
                throw response
            }
            return response
        },
    }) as UseMutationResult<SetPreviewDto, ValidationErrorResponseDto<keyof CreateSetDto> | ExceptionErrorResponseDto, CreateSetDto>
    return {
        call: mutateAsync as typeof setApi.createSet,
        data,
        isLoading,
        error,
    }
}