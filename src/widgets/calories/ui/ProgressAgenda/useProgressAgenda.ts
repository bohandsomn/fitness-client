import { useLostCaloriesStateSelector, useLostCaloriesStateUpdate } from '@/entities'
import { errorAdapter } from '@/shared'

export const useProgressAgenda = () => {
    const state = useLostCaloriesStateSelector((state) => state)
    const { reload, close } = useLostCaloriesStateUpdate()
    const header = errorAdapter({ message: state.error || '' } as any).join('\n')
    return {
        reload,
        close,
        header,
    }
}