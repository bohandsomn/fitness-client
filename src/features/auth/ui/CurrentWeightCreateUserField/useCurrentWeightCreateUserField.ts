import { useMemo } from 'react'
import { useCreateUserStateSelector, useCreateUserStateUpdate } from '@/entities'
import { AuthException, isLength } from '@/shared'

export const useCurrentWeightCreateUserField = () => {
    const weight = useCreateUserStateSelector((state): number => state.weight || 0)
    const { changeWeight } = useCreateUserStateUpdate()
    const rules = useMemo(() => [
        () => isLength(weight, 1) ? null : AuthException.IS_NOT_POSITIVE_WEIGHT,
    ], [weight])
    return {
        weight,
        changeWeight,
        rules,
    }
}