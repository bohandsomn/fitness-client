import { FC, PropsWithChildren } from 'react'
import { Provider } from './context'
import { useInitialSets } from './useInitialSets'

export const SetsProvider: FC<PropsWithChildren> = ({ children }) => {
    const initialState = useInitialSets()
    return <Provider initialState={initialState}>{children}</Provider>
}
