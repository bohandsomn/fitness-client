import { useMemo } from 'react'
import { useCreateUserStateSelector, useCreateUserStateUpdate } from '@/entities'
import { isLength, AuthException } from '@/shared'

export const useGoalWeightCreateUserField = () => {
    const goalWeight = useCreateUserStateSelector((state): number => state.goalWeight || 0)
    const currentWeight = useCreateUserStateSelector((state): number => state.weight || 0)
    const { changeGoalWeight } = useCreateUserStateUpdate()
    const rules = useMemo(() => [
        () => isLength(goalWeight, 1) ? null : AuthException.IS_NOT_POSITIVE_WEIGHT,
        () => goalWeight < currentWeight ? null : AuthException.IS_GOAL_WEIGHT
    ], [goalWeight, currentWeight])
    return {
        goalWeight,
        changeGoalWeight,
        rules,
    }
}