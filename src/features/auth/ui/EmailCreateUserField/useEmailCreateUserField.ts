import { useMemo } from 'react'
import { useCreateUserStateSelector, useCreateUserStateUpdate } from '@/entities'
import { AuthConst, AuthException, isEmail, isLength } from '@/shared'

export const useEmailCreateUserField = () => {
    const email = useCreateUserStateSelector((state): string => state.email || '')
    const { changeEmail } = useCreateUserStateUpdate()
    const rules = useMemo(() => [
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