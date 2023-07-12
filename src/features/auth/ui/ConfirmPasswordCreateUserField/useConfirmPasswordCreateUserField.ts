import { useMemo } from 'react'
import { useCreateUserStateSelector, useCreateUserStateUpdate } from '@/entities'
import { AuthException, isLength } from '@/shared'

export const useConfirmPasswordCreateUserField = () => {
    const password = useCreateUserStateSelector((state): string => state.password || '')
    const confirmPassword = useCreateUserStateSelector((state): string => state.confirmPassword || '')
    const { changeConfirmPassword } = useCreateUserStateUpdate()
    const rules = useMemo(() => [
        () => isLength(confirmPassword, 8, 12) ? null : AuthException.IS_NOT_PASSWORD,
        () => password === confirmPassword ? null : AuthException.PASSWORD_IS_NOT_EQUAL,
    ], [password, confirmPassword])
    return {
        confirmPassword,
        changeConfirmPassword,
        rules,
    }
}