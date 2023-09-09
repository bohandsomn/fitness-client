import { ExceptionErrorResponseDto, SetKey, SetPreviewDto, setApi } from '@/shared'
import { useMutation } from 'react-query'

export const useGetSets = () => {
    const { mutateAsync, data = null, isLoading, error } = useMutation<SetPreviewDto[], ExceptionErrorResponseDto>({
        async mutationFn() {
            const response = await setApi.getSets()
            if (Array.isArray(response)) {
                return response
            }
            throw response
        },
        mutationKey: SetKey.GET_SETS,
        retry: false,
    })
    return {
        data,
        isLoading,
        error,
        call: mutateAsync as typeof setApi.getSets
    }
}