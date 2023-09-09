import { createOptimizedContext } from '@/shared'
import { ISetPreviewOptimizedContext } from './type'

export const {
    Provider,
    useStateSelector: useSetPreviewStateSelector,
    useStateUpdate,
} = createOptimizedContext<ISetPreviewOptimizedContext>({
    name: 'SetPreview',
})
