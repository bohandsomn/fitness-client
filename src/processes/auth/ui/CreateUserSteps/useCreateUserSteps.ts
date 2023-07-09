import { useCallback } from 'react'

export const useCreateUserSteps = () => {
    const handleRegisterUser = useCallback(() => { }, [])
    return {
        handleRegisterUser,
    }
}