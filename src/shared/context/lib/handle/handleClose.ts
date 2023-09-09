import { IUpdateStateParameters } from './type'

export function handleClose<T>(): IUpdateStateParameters<T> {
    return (previous) => {
        if (previous.previous) {
            return {
                previous: null,
                data: previous.previous,
                isLoading: false,
                error: null,
            }
        } else {
            return {
                previous: null,
                isLoading: false,
                error: null,
            }
        }
    }
}