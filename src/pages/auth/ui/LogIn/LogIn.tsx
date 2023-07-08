import { FC } from 'react'
import { LogIn as LogInWidget } from '@/widgets'
import { ILogInProps } from './type'
import { useLogIn } from './useLogIn'

export const LogIn: FC<ILogInProps> = () => {
    const {} = useLogIn()
    return <LogInWidget />
}
