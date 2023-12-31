import React from 'react'
import { Container } from './Container'

const ContainerMeta = {
    title: 'Shared/Container',
    component: Container,
    decorators: [(Story: typeof Container) => <Story />],
}

export default ContainerMeta

export const Basic = {}
