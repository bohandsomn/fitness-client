import { AuthConst } from '@/shared'

export const useEnterWeightAndGoal = () => {
    const header = AuthConst.ENTER_WEIGHT_AND_GOAL
    const weight = AuthConst.WEIGHT
    const goalWeight = AuthConst.GOAL_WEIGHT
    return {
        header,
        weight,
        goalWeight,
    }
}