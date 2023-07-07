import { FC } from 'react'
import { IWelcomeProps } from './type'
import { useWelcome } from './useWelcome'
import { WelcomeProvider, Welcome as WelcomeEntity } from '@/entities'
import { CreateAccount, LogIn } from '@/features'

export const Welcome: FC<IWelcomeProps> = () => {
    const {} = useWelcome()
    return (
        <WelcomeProvider>
            <WelcomeEntity
                logInButton={<LogIn />}
                createAnAccountButton={<CreateAccount />}
            />
        </WelcomeProvider>
    )
}
