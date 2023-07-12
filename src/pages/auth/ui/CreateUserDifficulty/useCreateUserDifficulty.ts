import { useCreateUserStateUpdate } from '@/entities'

export const useCreateUserDifficulty = () => {
    const { selectDifficulty } = useCreateUserStateUpdate()
    return {
        selectDifficulty,
    }
}