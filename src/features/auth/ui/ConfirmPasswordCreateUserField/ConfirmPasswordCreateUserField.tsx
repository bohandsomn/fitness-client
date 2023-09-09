import { FC } from 'react'
import { IConfirmPasswordCreateUserFieldProps } from './type'
import { useConfirmPasswordCreateUserField } from './useConfirmPasswordCreateUserField'
import { AppInput } from '@/shared'

export const ConfirmPasswordCreateUserField: FC<
    IConfirmPasswordCreateUserFieldProps
> = () => {
    const { confirmPassword, changeConfirmPassword, rules, placeholder } =
        useConfirmPasswordCreateUserField()
    return (
        <AppInput
            value={confirmPassword}
            onChangeText={changeConfirmPassword}
            rules={rules}
            placeholder={placeholder}
            type="password"
        />
    )
}
