import { FC } from 'react'
import { AppNumberInput } from '@/shared'
import { ICurrentWeightCreateUserFieldProps } from './type'
import { useCurrentWeightCreateUserField } from './useCurrentWeightCreateUserField'

export const CurrentWeightCreateUserField: FC<
    ICurrentWeightCreateUserFieldProps
> = () => {
    const { weight, changeWeight, rules, placeholder, metric } =
        useCurrentWeightCreateUserField()
    return (
        <AppNumberInput
            value={weight}
            onChangeText={changeWeight}
            rules={rules}
            placeholder={placeholder}
            min="1"
            rightText={metric}
        />
    )
}
