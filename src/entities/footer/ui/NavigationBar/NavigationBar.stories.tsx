import React, { FC } from 'react'
import { NavigationBar } from './NavigationBar'

const NavigationBarMeta = {
    title: 'Entities/Footer/NavigationBar',
    component: NavigationBar,
    decorators: [(Story: FC) => <Story />],
}

export default NavigationBarMeta

export const Basic = {}
