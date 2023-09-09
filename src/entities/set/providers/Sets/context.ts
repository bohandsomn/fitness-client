import { createOptimizedContext } from '@/shared'
import { ISetsOptimizedContext } from './type'

export const {
    Provider,
    useStateSelector: useSetsStateSelector,
    useStateUpdate,
} = createOptimizedContext<ISetsOptimizedContext>({
    name: 'Sets',
})
