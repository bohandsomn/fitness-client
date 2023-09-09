import { FC } from 'react'
import { AppNumberInput } from '@/shared'
import { IGoalWeightCreateUserFieldProps } from './type'
import { useGoalWeightCreateUserField } from './useGoalWeightCreateUserField'

export const GoalWeightCreateUserField: FC<
    IGoalWeightCreateUserFieldProps
> = () => {
    const { goalWeight, changeGoalWeight, rules, placeholder, metric } =
        useGoalWeightCreateUserField()
    return (
        <AppNumberInput
            value={goalWeight}
            onChangeText={changeGoalWeight}
            rules={rules}
            placeholder={placeholder}
            min="1"
            rightText={metric}
        />
    )
}
