import { FC } from 'react'
import { AppNumberInput, AuthConst } from '@/shared'
import { IHeightCreateUserFieldProps } from './type'
import { useHeightCreateUserField } from './useHeightCreateUserField'

export const HeightCreateUserField: FC<IHeightCreateUserFieldProps> = () => {
    const { height, changeHeight, rules } = useHeightCreateUserField()
    return (
        <AppNumberInput
            value={height}
            onChangeText={changeHeight}
            rules={rules}
            placeholder={AuthConst.DOUBLE_ZERO}
            min="1"
            rightText={AuthConst.CM}
        />
    )
}
