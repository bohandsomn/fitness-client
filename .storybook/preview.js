import { StoreProvider } from '../src/entities'
import { Container, FetchingProvider, NavigationProvider, UiProvider } from '../src/shared'

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <StoreProvider>
      <UiProvider>
        <NavigationProvider>
          <Container>
            <FetchingProvider>
              <Story />
            </FetchingProvider>
          </Container>
        </NavigationProvider>
      </UiProvider>
    </StoreProvider>
  )
]
