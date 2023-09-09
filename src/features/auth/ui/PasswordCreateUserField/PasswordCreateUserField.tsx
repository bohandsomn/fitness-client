import { FC } from 'react'
import { AppInput } from '@/shared'
import { IPasswordCreateUserFieldProps } from './type'
import { usePasswordCreateUserField } from './usePasswordCreateUserField'

export const PasswordCreateUserField: FC<
    IPasswordCreateUserFieldProps
> = () => {
    const { password, changePassword, rules, placeholder } =
        usePasswordCreateUserField()
    return (
        <AppInput
            value={password}
            onChangeText={changePassword}
            rules={rules}
            placeholder={placeholder}
            type="password"
        />
    )
}
