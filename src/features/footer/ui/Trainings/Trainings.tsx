import { FC } from 'react'
import { PageNames } from '@/shared'
import { ITrainingsProps } from './type'
import { useTrainings } from './useTrainings'
import { NavigationLink } from '../NavigationLink'

export const Trainings: FC<ITrainingsProps> = () => {
    const { header } = useTrainings()
    return <NavigationLink header={header} route={PageNames.TRAININGS} />
}
