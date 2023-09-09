import { FC } from 'react'
import { Provider } from './context'
import { useInitialStep } from './useInitialStep'
import { IStepProviderProps } from './type'

export const StepProvider: FC<IStepProviderProps> = ({
    children,
    data = {},
}) => {
    const initialState = useInitialStep(data)
    return <Provider initialState={initialState}>{children}</Provider>
}
