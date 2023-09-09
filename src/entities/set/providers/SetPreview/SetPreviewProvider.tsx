import { FC } from 'react'
import { Provider } from './context'
import { ISetPreviewProviderProps } from './type'

export const SetPreviewProvider: FC<ISetPreviewProviderProps> = ({
    children,
    data,
}) => {
    return <Provider initialState={data}>{children}</Provider>
}
