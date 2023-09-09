import { useMemo } from 'react'
import { useCreateUserStateSelector, useCreateUserStateUpdate } from '@/entities'
import { AuthConst, AuthException, isLength } from '@/shared'

export const useHeightCreateUserField = () => {
    const height = useCreateUserStateSelector((state) => state.height || undefined)
    const { changeHeight } = useCreateUserStateUpdate()
    const rules = useMemo(() => [
        () => isLength(height || 0, 1) ? null : AuthException.IS_HEIGHT,
    ], [height])
    const placeholder = AuthConst.DOUBLE_ZERO
    const metric = AuthConst.CM
    return {
        height,
        changeHeight,
        rules,
        placeholder,
        metric,
    }
}