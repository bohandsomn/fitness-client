import { FC } from 'react'
import { Welcome as WelcomeWidget } from '@/widgets'
import { IWelcomeProps } from './type'
import { useWelcome } from './useWelcome'

export const Welcome: FC<IWelcomeProps> = () => {
    const {} = useWelcome()
    return <WelcomeWidget />
}
