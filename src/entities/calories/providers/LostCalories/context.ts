import { createOptimizedContext } from '@/shared'
import { ILostCaloriesOptimizedContext } from './type'

export const {
    Provider,
    useStateSelector: useLostCaloriesStateSelector,
    useStateUpdate,
} = createOptimizedContext<ILostCaloriesOptimizedContext>({
    name: 'LostCalories',
})
