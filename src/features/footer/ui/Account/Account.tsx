import { FC } from 'react'
import { IAccountProps } from './type'
import { useAccount } from './useAccount'
import { NavigationLink } from '../NavigationLink'
import { PageNames } from '@/shared'

export const Account: FC<IAccountProps> = () => {
    const { header } = useAccount()
    return <NavigationLink header={header} route={PageNames.ACCOUNT} />
}
