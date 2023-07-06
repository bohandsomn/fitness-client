import { FC, PropsWithChildren } from 'react'

export interface ICreateOptimizedContextResult<T> {
    Provider: FC<IProviderProps<T>>
    useStateSelector: <Result extends unknown>(selector: (state: T) => Result) => Result
    useUpdate: IUseUpdate<T>
}

export interface IProviderProps<T> extends PropsWithChildren {
    initialState: T
}

export type IUseUpdate<T> = () => (state: Partial<T>) => void
