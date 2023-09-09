import { createOptimizedContext } from '@/shared'
import { ICreateSetModalOptimizedContext } from './type'

export const {
    Provider,
    useStateSelector: useCreateSetModalStateSelector,
    useStateUpdate,
} = createOptimizedContext<ICreateSetModalOptimizedContext>({
    name: 'CreateSetModal',
})
