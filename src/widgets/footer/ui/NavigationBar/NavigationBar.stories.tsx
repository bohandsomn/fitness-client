import React, { FC } from 'react'
import { NavigationBar } from './NavigationBar'
import { NavigationDecorator } from '../../../../../.storybook/mocks'
import { storiesOf } from '@storybook/react-native'

const NavigationBarMeta = {
    title: 'Widgets/Footer/NavigationBar',
    component: NavigationBar,
    decorators: [NavigationDecorator],
}

export default NavigationBarMeta

export const Basic = {}

storiesOf('Widgets/Footer/NavigationBar', module).addDecorator(
    NavigationDecorator,
)
