import { useLogInStateSelector, useLogInStateUpdate } from '@/entities'
import { AuthException, isLength } from '@/shared'
import { useMemo } from 'react'

export const usePasswordLogInField = () => {
    const password = useLogInStateSelector((state) => state.password)
    const { changePassword } = useLogInStateUpdate()
    const rules: (() => string | null)[] = useMemo(() => [
        () => isLength(password, 8, 12) ? null : AuthException.IS_NOT_PASSWORD,
    ], [password])
    return {
        password,
        changePassword,
        rules,
    }
}