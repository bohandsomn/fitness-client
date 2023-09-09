import { FC } from 'react'
import { Center, Text, View } from 'native-base'
import { IEnterWeightAndGoalProps } from './type'
import { useEnterWeightAndGoal } from './useEnterWeightAndGoal'
import { CreateUserContainer } from '../CreateUserContainer'
import { CurrentWeightLocalImage, GoalWeightLocalImage } from '@/shared'

export const EnterWeightAndGoal: FC<IEnterWeightAndGoalProps> = ({
    currentWeightField,
    goalWeightField,
}) => {
    const { header, weight, goalWeight } = useEnterWeightAndGoal()
    return (
        <CreateUserContainer header={header}>
            <Center marginTop="16px">
                <CurrentWeightLocalImage />
                <Text marginTop="4px">{weight}</Text>
                <View marginTop="8px">{currentWeightField}</View>
            </Center>
            <Center marginTop="48px">
                <GoalWeightLocalImage />
                <Text marginTop="4px">{goalWeight}</Text>
                <View marginTop="8px">{goalWeightField}</View>
            </Center>
        </CreateUserContainer>
    )
}
