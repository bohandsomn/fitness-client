import { FC } from 'react'
import { LogIn as LogInEntity, LogInProvider } from '@/entities'
import { ILogInProps } from './type'
import { useLogIn } from './useLogIn'
import {
    CreateAccountLink,
    EmailLogInField,
    LogInSubmit,
    PasswordLogInField,
} from '@/features'

export const LogIn: FC<ILogInProps> = () => {
    const {} = useLogIn()
    return (
        <LogInProvider>
            <LogInEntity
                emailField={<EmailLogInField />}
                passwordField={<PasswordLogInField />}
                logInSubmitButton={<LogInSubmit />}
                createAccountLink={<CreateAccountLink />}
            />
        </LogInProvider>
    )
}
