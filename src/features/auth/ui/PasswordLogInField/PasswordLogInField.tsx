import { FC } from 'react'
import { IPasswordLogInFieldProps } from './type'
import { usePasswordLogInField } from './usePasswordLogInField'
import { AppInput, AuthConst } from '@/shared'

export const PasswordLogInField: FC<IPasswordLogInFieldProps> = (props) => {
    const { password, changePassword, rules } = usePasswordLogInField()
    return (
        <AppInput
            value={password}
            onChangeText={changePassword}
            placeholder={AuthConst.PASSWORD}
            type="password"
            rules={rules}
            {...props}
        />
    )
}
