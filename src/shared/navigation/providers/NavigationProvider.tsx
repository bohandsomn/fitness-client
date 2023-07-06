import React, { FC, PropsWithChildren } from 'react'
import { NavigationContainer } from '@react-navigation/native'

export const NavigationProvider: FC<PropsWithChildren> = ({ children }) => {
    return <NavigationContainer>{children}</NavigationContainer>
}
