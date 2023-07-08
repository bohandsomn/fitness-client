import { FC } from 'react'
import { AppInput, AuthConst } from '@/shared'
import { IEmailLogInFieldProps } from './type'
import { useEmailLogInField } from './useEmailLogInField'

export const EmailLogInField: FC<IEmailLogInFieldProps> = (props) => {
    const { email, changeEmail, rules } = useEmailLogInField()
    return (
        <AppInput
            value={email}
            onChangeText={changeEmail}
            placeholder={AuthConst.EMAIL}
            rules={rules}
            type="text"
            {...props}
        />
    )
}
