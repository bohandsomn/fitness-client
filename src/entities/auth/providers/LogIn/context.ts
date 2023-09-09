import { createOptimizedContext } from '@/shared'
import { ILogInOptimizedContext } from './type'

export const {
    Provider,
    useStateSelector: useLogInStateSelector,
    useStateUpdate,
} = createOptimizedContext<ILogInOptimizedContext>({
    name: 'LogIn',
})
