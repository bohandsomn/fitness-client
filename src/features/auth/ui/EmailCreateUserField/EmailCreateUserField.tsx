import { FC } from 'react'
import { AppInput, AuthConst } from '@/shared'
import { IEmailCreateUserFieldProps } from './type'
import { useEmailCreateUserField } from './useEmailCreateUserField'

export const EmailCreateUserField: FC<IEmailCreateUserFieldProps> = () => {
    const { email, changeEmail, rules } = useEmailCreateUserField()
    return (
        <AppInput
            value={email}
            onChangeText={changeEmail}
            rules={rules}
            placeholder={AuthConst.EMAIL}
            type="text"
        />
    )
}
