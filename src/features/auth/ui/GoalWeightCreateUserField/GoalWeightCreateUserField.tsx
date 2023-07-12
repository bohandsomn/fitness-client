import { FC } from 'react'
import { AppNumberInput, AuthConst } from '@/shared'
import { IGoalWeightCreateUserFieldProps } from './type'
import { useGoalWeightCreateUserField } from './useGoalWeightCreateUserField'

export const GoalWeightCreateUserField: FC<
    IGoalWeightCreateUserFieldProps
> = () => {
    const { goalWeight, changeGoalWeight, rules } =
        useGoalWeightCreateUserField()
    return (
        <AppNumberInput
            value={goalWeight}
            onChangeText={changeGoalWeight}
            rules={rules}
            placeholder={AuthConst.DOUBLE_ZERO}
            min="1"
            rightText={AuthConst.KG}
        />
    )
}
