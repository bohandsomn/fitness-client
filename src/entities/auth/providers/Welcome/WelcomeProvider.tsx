import { FC, PropsWithChildren } from 'react'
import { Provider } from './context'
import { useInitialWelcome } from './useInitialWelcome'

export const WelcomeProvider: FC<PropsWithChildren> = ({ children }) => {
    const initialState = useInitialWelcome()
    return <Provider initialState={initialState}>{children}</Provider>
}
