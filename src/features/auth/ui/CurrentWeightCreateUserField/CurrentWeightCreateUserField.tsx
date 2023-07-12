import { FC } from 'react'
import { AppNumberInput, AuthConst } from '@/shared'
import { ICurrentWeightCreateUserFieldProps } from './type'
import { useCurrentWeightCreateUserField } from './useCurrentWeightCreateUserField'

export const CurrentWeightCreateUserField: FC<
    ICurrentWeightCreateUserFieldProps
> = () => {
    const { weight, changeWeight, rules } = useCurrentWeightCreateUserField()
    return (
        <AppNumberInput
            value={weight}
            onChangeText={changeWeight}
            rules={rules}
            placeholder={AuthConst.DOUBLE_ZERO}
            min="1"
            rightText={AuthConst.KG}
        />
    )
}
