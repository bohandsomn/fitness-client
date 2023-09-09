import { FC } from 'react'
import { AppInput } from '@/shared'
import { IEmailCreateUserFieldProps } from './type'
import { useEmailCreateUserField } from './useEmailCreateUserField'

export const EmailCreateUserField: FC<IEmailCreateUserFieldProps> = () => {
    const { email, changeEmail, rules, placeholder } = useEmailCreateUserField()
    return (
        <AppInput
            value={email}
            onChangeText={changeEmail}
            rules={rules}
            placeholder={placeholder}
            type="text"
        />
    )
}
