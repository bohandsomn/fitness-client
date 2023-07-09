import { useSelectGenderStateSelector, useSelectGenderStateUpdate } from '@/entities'

export const useAppRadio = () => {
    const { value, options } = useSelectGenderStateSelector((state) => state)
    const { select: handleChange } = useSelectGenderStateUpdate()
    return {
        value,
        options,
        handleChange,
    }
}