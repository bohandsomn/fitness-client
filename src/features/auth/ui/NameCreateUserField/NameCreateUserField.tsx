import { FC } from 'react'
import { AppInput, AuthConst } from '@/shared'
import { INameCreateUserFieldProps } from './type'
import { useNameCreateUserField } from './useNameCreateUserField'

export const NameCreateUserField: FC<INameCreateUserFieldProps> = () => {
    const { name, changeName, rules } = useNameCreateUserField()
    return (
        <AppInput
            value={name}
            onChangeText={changeName}
            rules={rules}
            placeholder={AuthConst.NAME}
            type="text"
        />
    )
}
