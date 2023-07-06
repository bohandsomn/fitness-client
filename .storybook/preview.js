import { StoreProvider } from '../src/entities'
import { NavigationProvider, UiProvider } from '../src/shared'

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
          <Story />
        </NavigationProvider>
      </UiProvider>
    </StoreProvider>
  )
]
