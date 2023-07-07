import { FC, PropsWithChildren } from 'react'

export interface ICreateOptimizedContextResult<T> {
    Provider: FC<IProviderProps<T>>
    useStateSelector: <Result extends unknown>(selector: (state: T) => Result) => Result
    useStateUpdate: IUseUpdate<T>
}

export interface ICreateOptimizedContext {
    name?: string
}

export interface IProviderProps<T> extends PropsWithChildren {
    initialState: T
}

export type IUseUpdate<T> = () => (state: Partial<T>) => void
