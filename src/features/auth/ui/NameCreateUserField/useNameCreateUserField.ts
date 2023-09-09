import { useMemo } from 'react'
import { useCreateUserStateSelector, useCreateUserStateUpdate } from '@/entities'
import { AuthConst, AuthException, isLength } from '@/shared'

export const useNameCreateUserField = () => {
    const name = useCreateUserStateSelector((state): string => state.name || '')
    const { changeName } = useCreateUserStateUpdate()
    const rules = useMemo(() => [
        () => isLength(name, 1) ? null : AuthException.IS_EMPTY_NAME,
    ], [name])
    const placeholder = AuthConst.NAME
    return {
        name,
        changeName,
        rules,
        placeholder,
    }
}