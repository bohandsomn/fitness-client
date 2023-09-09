import { IUpdateStateParameters } from './type'

export function handleData<T>(data: T): IUpdateStateParameters<T> {
    return {
        data,
        isLoading: false,
        error: null,
    }
}