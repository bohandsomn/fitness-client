import { FC } from 'react'
import { AppNumberInput } from '@/shared'
import { IHeightCreateUserFieldProps } from './type'
import { useHeightCreateUserField } from './useHeightCreateUserField'

export const HeightCreateUserField: FC<IHeightCreateUserFieldProps> = () => {
    const { height, changeHeight, rules, placeholder, metric } =
        useHeightCreateUserField()
    return (
        <AppNumberInput
            value={height}
            onChangeText={changeHeight}
            rules={rules}
            placeholder={placeholder}
            min="1"
            rightText={metric}
        />
    )
}
