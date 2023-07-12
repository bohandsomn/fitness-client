import { FC } from 'react'
import { Center, Text, View } from 'native-base'
import { IEnterWeightAndGoalProps } from './type'
import { useEnterWeightAndGoal } from './useEnterWeightAndGoal'
import { CreateUserContainer } from '../CreateUserContainer'
import {
    AuthConst,
    CurrentWeightLocalImage,
    GoalWeightLocalImage,
} from '@/shared'

export const EnterWeightAndGoal: FC<IEnterWeightAndGoalProps> = ({
    currentWeightField,
    goalWeightField,
}) => {
    const {} = useEnterWeightAndGoal()
    return (
        <CreateUserContainer header={AuthConst.ENTER_WEIGHT_AND_GOAL}>
            <Center marginTop="16px">
                <CurrentWeightLocalImage />
                <Text marginTop="4px">{AuthConst.WEIGHT}</Text>
                <View marginTop="8px">{currentWeightField}</View>
            </Center>
            <Center marginTop="48px">
                <GoalWeightLocalImage />
                <Text marginTop="4px">{AuthConst.GOAL_WEIGHT}</Text>
                <View marginTop="8px">{goalWeightField}</View>
            </Center>
        </CreateUserContainer>
    )
}
