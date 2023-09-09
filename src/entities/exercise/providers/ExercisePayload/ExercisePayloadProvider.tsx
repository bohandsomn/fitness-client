import { FC } from 'react'
import { Provider } from './context'
import { IExercisePayloadProviderProps } from './type'

export const ExercisePayloadProvider: FC<IExercisePayloadProviderProps> = ({
    children,
    data,
}) => {
    return <Provider initialState={data}>{children}</Provider>
}
