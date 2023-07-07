import { useStateUpdate } from './context'
import { IUseTemplateNameStateUpdateResult } from './type'

export const useTemplateNameStateUpdate = (): IUseTemplateNameStateUpdateResult => {
    const update = useStateUpdate()
    return {}
}