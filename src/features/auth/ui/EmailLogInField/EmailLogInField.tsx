import { FC } from 'react'
import { AppInput } from '@/shared'
import { IEmailLogInFieldProps } from './type'
import { useEmailLogInField } from './useEmailLogInField'

export const EmailLogInField: FC<IEmailLogInFieldProps> = (props) => {
    const { email, changeEmail, rules, placeholder } = useEmailLogInField()
    return (
        <AppInput
            value={email}
            onChangeText={changeEmail}
            placeholder={placeholder}
            rules={rules}
            type="text"
            {...props}
        />
    )
}
