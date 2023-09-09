import { createOptimizedContext } from '@/shared'
import { IStepOptimizedContext } from './type'

export const {
    Provider,
    useStateSelector: useStepStateSelector,
    useStateUpdate,
} = createOptimizedContext<IStepOptimizedContext>({
    name: 'Step',
})
