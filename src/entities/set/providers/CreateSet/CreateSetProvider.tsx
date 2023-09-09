import { FC } from 'react'
import { Provider } from './context'
import { ICreateSetProviderProps } from './type'

export const CreateSetProvider: FC<ICreateSetProviderProps> = ({
    children,
    data = {},
}) => {
    return <Provider initialState={data}>{children}</Provider>
}
