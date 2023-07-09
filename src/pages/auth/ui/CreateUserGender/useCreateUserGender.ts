import { useCreateUserStateUpdate } from '@/entities'

export const useCreateUserGender = () => {
    const { selectGender } = useCreateUserStateUpdate()
    return {
        selectGender,
    }
}