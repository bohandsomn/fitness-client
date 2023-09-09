import { createOptimizedContext } from '@/shared'
import { IExercisePayloadOptimizedContext } from './type'

export const {
    Provider,
    useStateSelector: useExercisePayloadStateSelector,
    useStateUpdate,
} = createOptimizedContext<IExercisePayloadOptimizedContext>({
    name: 'ExercisePayload',
})
