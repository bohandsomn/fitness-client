import { useStateUpdate } from './context'
import { IUseAutoLogInStateUpdateResult } from './type'

export const useAutoLogInStateUpdate = (): IUseAutoLogInStateUpdateResult => {
    const update = useStateUpdate()
    return {}
}