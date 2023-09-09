import { CaloriesKey, ExceptionErrorResponseDto, GetUserHistoryDto, HistoryDto, ValidationErrorResponseDto, errorAdapter, historyApi } from '@/shared'
import { useMutation } from 'react-query'

export const useGetHistory = () => {
    const { data = null, isLoading, error, mutateAsync } = useMutation<HistoryDto, ValidationErrorResponseDto<keyof GetUserHistoryDto> | ExceptionErrorResponseDto, GetUserHistoryDto>({
        async mutationFn(dto: GetUserHistoryDto) {
            const response = await historyApi.getUserHistory(dto)
            if (
                ValidationErrorResponseDto.isValidationErrorResponse<keyof GetUserHistoryDto>(response) ||
                ExceptionErrorResponseDto.isExceptionErrorResponse(response)
            ) {
                throw response
            }
            return response
        },
        mutationKey: CaloriesKey.GET_HISTORY,
    })
    return {
        call: mutateAsync as typeof historyApi.getUserHistory,
        data,
        isLoading,
        error: error ? errorAdapter(error).join('\n') : null
    }
}