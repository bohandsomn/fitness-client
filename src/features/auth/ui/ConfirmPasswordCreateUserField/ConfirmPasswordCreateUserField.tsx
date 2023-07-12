import { FC } from 'react'
import { IConfirmPasswordCreateUserFieldProps } from './type'
import { useConfirmPasswordCreateUserField } from './useConfirmPasswordCreateUserField'
import { AppInput, AuthConst } from '@/shared'

export const ConfirmPasswordCreateUserField: FC<
    IConfirmPasswordCreateUserFieldProps
> = () => {
    const { confirmPassword, changeConfirmPassword, rules } =
        useConfirmPasswordCreateUserField()
    return (
        <AppInput
            value={confirmPassword}
            onChangeText={changeConfirmPassword}
            rules={rules}
            placeholder={AuthConst.CONFIRM}
            type="password"
        />
    )
}
