import { CaloriesKey, ExceptionErrorResponseDto, GetProgressInCaloriesDTO, ProgressInCaloriesDTO, ValidationErrorResponseDto, errorAdapter, progressApi } from '@/shared'
import { useMutation } from 'react-query'

export const useGetProgressInCalories = () => {
    const { mutateAsync, isLoading, error, data = null } = useMutation<
        ProgressInCaloriesDTO[],
        ExceptionErrorResponseDto | ValidationErrorResponseDto<keyof GetProgressInCaloriesDTO>,
        Partial<GetProgressInCaloriesDTO>
    >({
        async mutationFn(dto) {
            const response = await progressApi.getProgressInCalories(dto)
            if (Array.isArray(response)) {
                return response
            }
            throw response
        },
        mutationKey: CaloriesKey.GET_PROGRESS_IN_CALORIES,
    })
    return {
        call: mutateAsync as typeof progressApi.getProgressInCalories,
        isLoading,
        error: error ? errorAdapter(error) : null,
        data,
    }
}