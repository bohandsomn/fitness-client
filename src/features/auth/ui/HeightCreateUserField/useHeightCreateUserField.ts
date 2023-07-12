import { useMemo } from 'react'
import { useCreateUserStateSelector, useCreateUserStateUpdate } from '@/entities'
import { AuthException, isLength } from '@/shared'

export const useHeightCreateUserField = () => {
    const height = useCreateUserStateSelector((state): number => state.height || 0)
    const { changeHeight } = useCreateUserStateUpdate()
    const rules = useMemo(() => [
        () => isLength(height, 1) ? null : AuthException.IS_HEIGHT,
    ], [height])
    return {
        height,
        changeHeight,
        rules,
    }
}