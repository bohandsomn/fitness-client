import { createOptimizedContext } from '@/shared'
import { ICreateSetOptimizedContext } from './type'

export const {
    Provider,
    useStateSelector: useCreateSetStateSelector,
    useStateUpdate,
} = createOptimizedContext<ICreateSetOptimizedContext>({
    name: 'CreateSet',
})
