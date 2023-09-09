import React, { FC } from 'react'
import { PageNames } from '@/shared'
import { NavigationLink } from './NavigationLink'
import { NavigationDecorator } from '../../../../../.storybook/mocks'
import { storiesOf } from '@storybook/react-native'

const NavigationLinkMeta = {
    title: 'Features/Footer/NavigationLink',
    component: NavigationLink,
    decorators: [NavigationDecorator],
}

export default NavigationLinkMeta

export const Basic = {
    args: {
        header: 'Trainings header',
        route: PageNames.TRAININGS,
    },
}

storiesOf('Features/Footer/NavigationLink', module).addDecorator(
    NavigationDecorator,
)
