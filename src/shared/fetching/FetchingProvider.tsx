import React, { FC, PropsWithChildren } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

interface IFetchingProviderProps extends PropsWithChildren {}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})

export const FetchingProvider: FC<IFetchingProviderProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
