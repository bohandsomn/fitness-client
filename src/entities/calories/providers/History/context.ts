import { createOptimizedContext } from '@/shared'
import { IHistoryOptimizedContext } from './type'

export const {
    Provider,
    useStateSelector: useHistoryStateSelector,
    useStateUpdate,
} = createOptimizedContext<IHistoryOptimizedContext>({
    name: 'History',
})
