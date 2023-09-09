import { useMemo } from 'react'
import { useCreateUserStateSelector, useCreateUserStateUpdate } from '@/entities'
import { AuthConst, AuthException, isLength } from '@/shared'

export const usePasswordCreateUserField = () => {
    const password = useCreateUserStateSelector((state): string => state.password || '')
    const { changePassword } = useCreateUserStateUpdate()
    const rules = useMemo(() => [
        () => isLength(password, 8, 12) ? null : AuthException.IS_NOT_PASSWORD,
    ], [password])
    const placeholder = AuthConst.PASSWORD
    return {
        password,
        changePassword,
        rules,
        placeholder,
    }
}