import { IUpdateStateParameters } from './type'

export function handleError<T>(error: string): IUpdateStateParameters<T> {
    return {
        data: null,
        isLoading: false,
        error,
    }
}