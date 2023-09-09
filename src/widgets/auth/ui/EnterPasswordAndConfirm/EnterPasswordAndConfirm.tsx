import { FC } from 'react'
import { EnterPasswordAndConfirm as EnterPasswordAndConfirmEntity } from '@/entities'
import { IEnterPasswordAndConfirmProps } from './type'
import { useEnterPasswordAndConfirm } from './useEnterPasswordAndConfirm'
import {
    ConfirmPasswordCreateUserField,
    PasswordCreateUserField,
} from '@/features'

export const EnterPasswordAndConfirm: FC<
    IEnterPasswordAndConfirmProps
> = () => {
    const {} = useEnterPasswordAndConfirm()
    return (
        <EnterPasswordAndConfirmEntity
            passwordField={<PasswordCreateUserField />}
            confirmField={<ConfirmPasswordCreateUserField />}
        />
    )
}
