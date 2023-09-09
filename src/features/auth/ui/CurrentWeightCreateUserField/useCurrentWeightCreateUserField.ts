import { useMemo } from 'react'
import { useCreateUserStateSelector, useCreateUserStateUpdate } from '@/entities'
import { AuthConst, AuthException, isLength } from '@/shared'

export const useCurrentWeightCreateUserField = () => {
    const weight = useCreateUserStateSelector((state) => state.weight || undefined)
    const { changeWeight } = useCreateUserStateUpdate()
    const rules = useMemo(() => [
        () => isLength(weight || 0, 1) ? null : AuthException.IS_NOT_POSITIVE_WEIGHT,
    ], [weight])
    const placeholder = AuthConst.DOUBLE_ZERO
    const metric = AuthConst.KG
    return {
        weight,
        changeWeight,
        rules,
        placeholder,
        metric,
    }
}