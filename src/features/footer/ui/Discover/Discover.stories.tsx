import React, { FC } from 'react'
import { Discover } from './Discover'
import { NavigationDecorator } from '../../../../../.storybook/mocks'
import { storiesOf } from '@storybook/react-native'

const DiscoverMeta = {
    title: 'Features/Footer/Discover',
    component: Discover,
    decorators: [(Story: FC) => <Story />],
}

export default DiscoverMeta

export const Basic = {}

storiesOf('Features/Footer/Discover', module).addDecorator(NavigationDecorator)
