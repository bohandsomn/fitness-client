import { useStepStateSelector } from '@/entities'

export const useCreateUserPages = () => {
    const step = useStepStateSelector((state) => state.step)
    return {
        step,
    }
}