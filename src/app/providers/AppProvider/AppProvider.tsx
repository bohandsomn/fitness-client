import { FC } from 'react'
import { initialPage, pages } from '@/pages'
import { StoreProvider, WelcomeProvider } from '@/entities'
import {
    FetchingProvider,
    NavigationProvider,
    Navigator,
    UiProvider,
} from '@/shared'
import { processPages } from '@/processes'
import { InitialFetchProvider } from '../InitialFetch'

export const AppProvider: FC = () => {
    return (
        <StoreProvider>
            <UiProvider>
                <NavigationProvider>
                    <WelcomeProvider>
                        <InitialFetchProvider>
                            <FetchingProvider>
                                <Navigator
                                    pages={[...pages, ...processPages]}
                                    initialPage={initialPage}
                                />
                            </FetchingProvider>
                        </InitialFetchProvider>
                    </WelcomeProvider>
                </NavigationProvider>
            </UiProvider>
        </StoreProvider>
    )
}
