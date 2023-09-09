import { createOptimizedContext } from '@/shared'
import { ITemplateNameOptimizedContext } from './type'

export const {
    Provider,
    useStateSelector: useTemplateNameStateSelector,
    useStateUpdate,
} = createOptimizedContext<ITemplateNameOptimizedContext>({
    name: 'TemplateName',
})
