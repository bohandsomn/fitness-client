import { createOptimizedContext } from '@/shared'
import { IWelcomeOptimizedContext } from './type'

export const {
    Provider,
    useStateSelector: useWelcomeStateSelector,
    useStateUpdate,
} = createOptimizedContext<IWelcomeOptimizedContext>({
    name: 'Welcome',
})
