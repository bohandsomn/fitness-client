import { FC } from 'react'
import { INavigationBarProps } from './type'
import { useNavigationBar } from './useNavigationBar'
import { NavigationBar as NavigationBarEntity } from '@/entities'
import { Account, Discover, Trainings } from '@/features'

export const NavigationBar: FC<INavigationBarProps> = () => {
    const {} = useNavigationBar()
    return (
        <NavigationBarEntity
            trainings={<Trainings />}
            discover={<Discover />}
            account={<Account />}
        />
    )
}
