import React, { FC } from 'react'
import { Account } from './Account'
import { NavigationDecorator } from '../../../../../.storybook/mocks'
import { storiesOf } from '@storybook/react-native'

const AccountMeta = {
    title: 'Pages/Account/Account',
    component: Account,
    decorators: [NavigationDecorator],
}

export default AccountMeta

export const Basic = {}

storiesOf('Pages/Account/Account', module).addDecorator(NavigationDecorator)
