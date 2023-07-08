import { FC, PropsWithChildren } from 'react'
import { Provider } from './context'
import { useInitialAutoLogIn } from './useInitialAutoLogIn'

export const AutoLogInProvider: FC<PropsWithChildren> = ({ children }) => {
    const initialState = useInitialAutoLogIn()
    return <Provider initialState={initialState}>{children}</Provider>
}
