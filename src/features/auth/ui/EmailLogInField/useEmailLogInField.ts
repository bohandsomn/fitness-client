import { useLogInStateSelector, useLogInStateUpdate } from '@/entities'
import { AuthException, isEmail, isLength } from '@/shared'
import { useMemo } from 'react'

export const useEmailLogInField = () => {
    const email = useLogInStateSelector((state) => state.email)
    const { changeEmail } = useLogInStateUpdate()
    const rules: (() => string | null)[] = useMemo(() => [
        () => isEmail(email) ? null : AuthException.IS_NOT_EMAIL,
        () => isLength(email, 3) ? null : AuthException.IS_SHORT_EMAIL,
    ], [email])
    return {
        email,
        changeEmail,
        rules,
    }
}