import { FC } from 'react'
import { initialPage, pages } from '@/pages'
import { StoreProvider } from '@/entities'
import { NavigationProvider, Navigator } from '@/shared'

export const AppProvider: FC = () => {
    return (
        <StoreProvider>
            <NavigationProvider>
                <Navigator pages={pages} initialPage={initialPage} />
            </NavigationProvider>
        </StoreProvider>
    )
}
