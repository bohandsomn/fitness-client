import { useMemo } from 'react'
import { useCreateUserStateSelector, useCreateUserStateUpdate } from '@/entities'
import { AuthException, isLength } from '@/shared'

export const usePasswordCreateUserField = () => {
    const password = useCreateUserStateSelector((state): string => state.password || '')
    const { changePassword } = useCreateUserStateUpdate()
    const rules = useMemo(() => [
        () => isLength(password, 8, 12) ? null : AuthException.IS_NOT_PASSWORD,
    ], [password])
    return {
        password,
        changePassword,
        rules,
    }
}