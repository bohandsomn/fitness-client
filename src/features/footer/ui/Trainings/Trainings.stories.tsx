import React, { FC } from 'react'
import { Trainings } from './Trainings'
import { NavigationDecorator } from '../../../../../.storybook/mocks'
import { storiesOf } from '@storybook/react-native'

const TrainingsMeta = {
    title: 'Features/Footer/Trainings',
    component: Trainings,
    decorators: [NavigationDecorator],
}

export default TrainingsMeta

export const Basic = {}

storiesOf('Features/Footer/Trainings', module).addDecorator(NavigationDecorator)
