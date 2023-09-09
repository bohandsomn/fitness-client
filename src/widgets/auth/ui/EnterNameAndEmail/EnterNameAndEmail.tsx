import { FC } from 'react'
import { EmailCreateUserField, NameCreateUserField } from '@/features'
import { EnterNameAndEmail as EnterNameAndEmailEntity } from '@/entities'
import { IEnterNameAndEmailProps } from './type'
import { useEnterNameAndEmail } from './useEnterNameAndEmail'

export const EnterNameAndEmail: FC<IEnterNameAndEmailProps> = () => {
    const {} = useEnterNameAndEmail()
    return (
        <EnterNameAndEmailEntity
            nameField={<NameCreateUserField />}
            emailField={<EmailCreateUserField />}
        />
    )
}
