import { useMemo } from 'react'
import { useLogInStateSelector, useLogInStateUpdate } from '@/entities'
import { AuthConst, AuthException, isLength } from '@/shared'

export const usePasswordLogInField = () => {
    const password = useLogInStateSelector((state) => state.password)
    const { changePassword } = useLogInStateUpdate()
    const rules: (() => string | null)[] = useMemo(() => [
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