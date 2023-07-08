import { FC } from 'react'
import { initialPage, pages } from '@/pages'
import { AutoLogInProvider, StoreProvider, WelcomeProvider } from '@/entities'
import { NavigationProvider, Navigator, UiProvider } from '@/shared'

export const AppProvider: FC = () => {
    return (
        <StoreProvider>
            <UiProvider>
                <NavigationProvider>
                    <WelcomeProvider>
                        <AutoLogInProvider>
                            <Navigator
                                pages={pages}
                                initialPage={initialPage}
                            />
                        </AutoLogInProvider>
                    </WelcomeProvider>
                </NavigationProvider>
            </UiProvider>
        </StoreProvider>
    )
}
