import { FC } from 'react'
import { LogIn as LogInWidget } from '@/widgets'
import { Container } from '@/shared'
import { ILogInProps } from './type'
import { useLogIn } from './useLogIn'

export const LogIn: FC<ILogInProps> = () => {
    const {} = useLogIn()
    return (
        <Container>
            <LogInWidget />
        </Container>
    )
}
