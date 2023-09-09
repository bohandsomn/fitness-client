import { FC } from 'react'
import { Text, View } from 'native-base'
import { CaloriesConst } from '@/shared'
import { IProgressExercisesSectionProps } from './type'
import { useProgressExercisesSection } from './useProgressExercisesSection'
import { ProgressExercises } from '../ProgressExercises'

export const ProgressExercisesSection: FC<
    IProgressExercisesSectionProps
> = () => {
    const { weekMonthDay, kiloCalories, metric } = useProgressExercisesSection()
    return (
        <View>
            <View
                display="flex"
                alignItems="center"
                flexDirection="row"
                justifyContent="space-between"
                marginBottom="12px"
            >
                <Text fontSize="22px">{weekMonthDay}</Text>
                <Text>{`${kiloCalories} ${metric}`}</Text>
            </View>
            <ProgressExercises />
        </View>
    )
}
