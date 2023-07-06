import { FC } from 'react'
import { initialPage, pages } from '@/pages'
import { StoreProvider } from '@/entities'
import { NavigationProvider, Navigator, UiProvider } from '@/shared'

export const AppProvider: FC = () => {
    return (
        <StoreProvider>
            <UiProvider>
                <NavigationProvider>
                    <Navigator pages={pages} initialPage={initialPage} />
                </NavigationProvider>
            </UiProvider>
        </StoreProvider>
    )
}
