import { FC } from 'react'
import {
    CurrentWeightCreateUserField,
    GoalWeightCreateUserField,
} from '@/features'
import { EnterWeightAndGoal as EnterWeightAndGoalEntity } from '@/entities'
import { IEnterWeightAndGoalProps } from './type'
import { useEnterWeightAndGoal } from './useEnterWeightAndGoal'

export const EnterWeightAndGoal: FC<IEnterWeightAndGoalProps> = () => {
    const {} = useEnterWeightAndGoal()
    return (
        <EnterWeightAndGoalEntity
            currentWeightField={<CurrentWeightCreateUserField />}
            goalWeightField={<GoalWeightCreateUserField />}
        />
    )
}
