import { FC } from 'react'
import { Welcome as WelcomeWidget } from '@/widgets'
import { Container } from '@/shared'
import { IWelcomeProps } from './type'
import { useWelcome } from './useWelcome'

export const Welcome: FC<IWelcomeProps> = () => {
    const {} = useWelcome()
    return (
        <Container>
            <WelcomeWidget />
        </Container>
    )
}
