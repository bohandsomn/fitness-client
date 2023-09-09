import { useMemo } from 'react'
import { useLogInStateSelector, useLogInStateUpdate } from '@/entities'
import { AuthConst, AuthException, isEmail, isLength } from '@/shared'

export const useEmailLogInField = () => {
    const email = useLogInStateSelector((state) => state.email)
    const { changeEmail } = useLogInStateUpdate()
    const rules: (() => string | null)[] = useMemo(() => [
        () => isEmail(email) ? null : AuthException.IS_NOT_EMAIL,
        () => isLength(email, 3) ? null : AuthException.IS_SHORT_EMAIL,
    ], [email])
    const placeholder = AuthConst.EMAIL
    return {
        email,
        changeEmail,
        rules,
        placeholder,
    }
}