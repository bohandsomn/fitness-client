import { useMemo } from 'react'
import { useCreateUserStateSelector, useCreateUserStateUpdate } from '@/entities'
import { isLength, AuthException, AuthConst } from '@/shared'

export const useGoalWeightCreateUserField = () => {
    const goalWeight = useCreateUserStateSelector((state) => state.goalWeight || undefined)
    const currentWeight = useCreateUserStateSelector((state): number => state.weight || 0)
    const { changeGoalWeight } = useCreateUserStateUpdate()
    const rules = useMemo(() => [
        () => isLength(goalWeight || 0, 1) ? null : AuthException.IS_NOT_POSITIVE_WEIGHT,
        () => goalWeight || 0 < currentWeight ? null : AuthException.IS_GOAL_WEIGHT
    ], [goalWeight, currentWeight])
    const placeholder = AuthConst.DOUBLE_ZERO
    const metric = AuthConst.KG
    return {
        goalWeight,
        changeGoalWeight,
        rules,
        placeholder,
        metric,
    }
}