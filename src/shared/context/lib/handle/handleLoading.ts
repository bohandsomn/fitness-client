import { IUpdateStateParameters } from './type'

export function handleLoading<T>(): IUpdateStateParameters<T> {
    return (previous) => ({
        previous: previous.data,
        data: null,
        isLoading: true,
        error: null
    })
}