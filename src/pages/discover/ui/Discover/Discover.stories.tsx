import React, { FC } from 'react'
import { Discover } from './Discover'
import { NavigationDecorator } from '../../../../../.storybook/mocks'
import { storiesOf } from '@storybook/react-native'

const DiscoverMeta = {
    title: 'Pages/Discover/Discover',
    component: Discover,
    decorators: [NavigationDecorator],
}

export default DiscoverMeta

export const Basic = {}

storiesOf('Pages/Discover/Discover', module).addDecorator(NavigationDecorator)
