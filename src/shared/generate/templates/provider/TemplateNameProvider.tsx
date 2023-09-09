import { FC, PropsWithChildren } from 'react'
import { Provider } from './context'
import { useInitialTemplateName } from './useInitialTemplateName'

export const TemplateNameProvider: FC<PropsWithChildren> = ({ children }) => {
    const initialState = useInitialTemplateName()
    return <Provider initialState={initialState}>{children}</Provider>
}
