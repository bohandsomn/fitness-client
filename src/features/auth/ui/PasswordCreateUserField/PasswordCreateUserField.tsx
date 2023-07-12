import { FC } from 'react'
import { AppInput, AuthConst } from '@/shared'
import { IPasswordCreateUserFieldProps } from './type'
import { usePasswordCreateUserField } from './usePasswordCreateUserField'

export const PasswordCreateUserField: FC<
    IPasswordCreateUserFieldProps
> = () => {
    const { password, changePassword, rules } = usePasswordCreateUserField()
    return (
        <AppInput
            value={password}
            onChangeText={changePassword}
            rules={rules}
            placeholder={AuthConst.PASSWORD}
            type="password"
        />
    )
}
