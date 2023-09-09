import { FC } from 'react'
import { PageNames } from '@/shared'
import { IDiscoverProps } from './type'
import { useDiscover } from './useDiscover'
import { NavigationLink } from '../NavigationLink'

export const Discover: FC<IDiscoverProps> = () => {
    const { header } = useDiscover()
    return <NavigationLink header={header} route={PageNames.DISCOVER} />
}
