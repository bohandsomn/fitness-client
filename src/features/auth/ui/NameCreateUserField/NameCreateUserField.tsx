import { FC } from 'react'
import { AppInput } from '@/shared'
import { INameCreateUserFieldProps } from './type'
import { useNameCreateUserField } from './useNameCreateUserField'

export const NameCreateUserField: FC<INameCreateUserFieldProps> = () => {
    const { name, changeName, rules, placeholder } = useNameCreateUserField()
    return (
        <AppInput
            value={name}
            onChangeText={changeName}
            rules={rules}
            placeholder={placeholder}
            type="text"
        />
    )
}
