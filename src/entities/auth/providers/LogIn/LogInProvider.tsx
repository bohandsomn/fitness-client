import { FC, PropsWithChildren } from 'react'
import { Provider } from './context'
import { useInitialLogIn } from './useInitialLogIn'

export const LogInProvider: FC<PropsWithChildren> = ({ children }) => {
    const initialState = useInitialLogIn()
    return <Provider initialState={initialState}>{children}</Provider>
}
