import { FC, PropsWithChildren } from 'react'
import { Provider } from './context'
import { useInitialLostCalories } from './useInitialLostCalories'

export const LostCaloriesProvider: FC<PropsWithChildren> = ({ children }) => {
    const initialState = useInitialLostCalories()
    return <Provider initialState={initialState}>{children}</Provider>
}
