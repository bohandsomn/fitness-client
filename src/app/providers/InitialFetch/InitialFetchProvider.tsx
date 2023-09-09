import React, { FC, PropsWithChildren } from 'react'
import { useInitialFetch } from './useInitialFetch'

export const InitialFetchProvider: FC<PropsWithChildren> = ({ children }) => {
    useInitialFetch()
    return <>{children}</>
}
