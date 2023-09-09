import React, { FC } from 'react'
import { Account } from './Account'
import { NavigationDecorator } from '../../../../../.storybook/mocks'
import { storiesOf } from '@storybook/react-native'

const AccountMeta = {
    title: 'Features/Footer/Account',
    component: Account,
    decorators: [(Story: FC) => <Story />],
}

export default AccountMeta

export const Basic = {}

storiesOf('Features/Footer/Account', module).addDecorator(NavigationDecorator)
