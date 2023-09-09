import { FC, PropsWithChildren } from 'react'
import { Provider } from './context'
import { useInitialHistory } from './useInitialHistory'

export const HistoryProvider: FC<PropsWithChildren> = ({ children }) => {
    const initialState = useInitialHistory()
    return <Provider initialState={initialState}>{children}</Provider>
}
