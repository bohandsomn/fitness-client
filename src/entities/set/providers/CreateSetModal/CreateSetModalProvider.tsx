import { FC, PropsWithChildren } from 'react'
import { Provider } from './context'
import { useInitialCreateSetModal } from './useInitialCreateSetModal'

export const CreateSetModalProvider: FC<PropsWithChildren> = ({ children }) => {
    const initialState = useInitialCreateSetModal()
    return <Provider initialState={initialState}>{children}</Provider>
}
