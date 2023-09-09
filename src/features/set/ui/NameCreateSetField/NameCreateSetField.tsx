import { FC } from 'react'
import { AppInput } from '@/shared'
import { INameCreateSetFieldProps } from './type'
import { useNameCreateSetField } from './useNameCreateSetField'

export const NameCreateSetField: FC<INameCreateSetFieldProps> = () => {
    const { name, handleChangeName, rules, placeholder } =
        useNameCreateSetField()
    return (
        <AppInput
            value={name}
            onChangeText={handleChangeName}
            rules={rules}
            placeholder={placeholder}
        />
    )
}
