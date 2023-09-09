import { NativeBaseProvider } from 'native-base'
import { FC, PropsWithChildren } from 'react'
import { theme } from './theme'

export const UiProvider: FC<PropsWithChildren> = ({ children }) => {
    return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
}
