import { useMemo } from 'react'
import { ITemplateNameOptimizedContext } from './type'

export const useInitialTemplateName = (): ITemplateNameOptimizedContext => {
    return useMemo(() => ({}), [])
}