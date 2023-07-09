import { createOptimizedContext } from '@/shared'
import { ICreateUserOptimizedContext } from './type'

export const {
    Provider,
    useStateSelector: useCreateUserStateSelector,
    useStateUpdate,
} = createOptimizedContext<ICreateUserOptimizedContext>({
    name: 'CreateUser',
})
