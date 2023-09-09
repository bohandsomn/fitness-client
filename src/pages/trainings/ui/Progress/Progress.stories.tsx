import React, { FC } from 'react'
import { Progress } from './Progress'
import { NavigationDecorator } from '../../../../../.storybook/mocks'
import { storiesOf } from '@storybook/react-native'

const ProgressMeta = {
    title: 'Pages/Trainings/Progress',
    component: Progress,
    decorators: [NavigationDecorator],
}

export default ProgressMeta

export const Basic = {}

storiesOf('Pages/Trainings/Progress', module).addDecorator(NavigationDecorator)
