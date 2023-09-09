import React, { FC } from 'react'
import { WithNavigationBar } from './WithNavigationBar'
import { NavigationDecorator } from '../../../../../.storybook/mocks'
import { storiesOf } from '@storybook/react-native'

const WithNavigationBarMeta = {
    title: 'Pages/Footer/WithNavigationBar',
    component: WithNavigationBar,
    decorators: [NavigationDecorator],
}

export default WithNavigationBarMeta

export const Basic = {}

storiesOf('WithNavigationBar', module).addDecorator(NavigationDecorator)
