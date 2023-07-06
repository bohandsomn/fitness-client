import { StoreProvider } from '../src/entities'
import { Container, NavigationProvider, UiProvider } from '../src/shared'

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
            <Story />
          </Container>
        </NavigationProvider>
      </UiProvider>
    </StoreProvider>
  )
]
