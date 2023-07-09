import { FC, PropsWithChildren } from 'react'
import { Provider } from './context'
import { useInitialCreateUser } from './useInitialCreateUser'

export const CreateUserProvider: FC<PropsWithChildren> = ({ children }) => {
    const initialState = useInitialCreateUser()
    return <Provider initialState={initialState}>{children}</Provider>
}
