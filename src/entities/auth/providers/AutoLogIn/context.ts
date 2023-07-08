import { createOptimizedContext } from '@/shared'
import { IAutoLogInOptimizedContext } from './type'

export const {
    Provider,
    useStateSelector: useAutoLogInStateSelector,
    useStateUpdate,
} = createOptimizedContext<IAutoLogInOptimizedContext>({
    name: 'AutoLogIn',
})
