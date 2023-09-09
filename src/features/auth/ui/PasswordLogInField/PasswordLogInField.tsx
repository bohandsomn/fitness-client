import { FC } from 'react'
import { IPasswordLogInFieldProps } from './type'
import { usePasswordLogInField } from './usePasswordLogInField'
import { AppInput, AuthConst } from '@/shared'

export const PasswordLogInField: FC<IPasswordLogInFieldProps> = (props) => {
    const { password, changePassword, rules, placeholder } =
        usePasswordLogInField()
    return (
        <AppInput
            value={password}
            onChangeText={changePassword}
            placeholder={placeholder}
            type="password"
            rules={rules}
            {...props}
        />
    )
}
