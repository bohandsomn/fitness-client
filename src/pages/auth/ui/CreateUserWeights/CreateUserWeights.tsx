import { FC } from 'react'
import { EnterWeightAndGoal } from '@/widgets'
import { ICreateUserWeightsProps } from './type'
import { useCreateUserWeights } from './useCreateUserWeights'

export const CreateUserWeights: FC<ICreateUserWeightsProps> = () => {
    const {} = useCreateUserWeights()
    return <EnterWeightAndGoal />
}
