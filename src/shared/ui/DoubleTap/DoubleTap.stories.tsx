import React, { FC } from 'react'
import { DoubleTap } from './DoubleTap'
import { View } from 'native-base'

const DoubleTapMeta = {
    title: 'Shared/DoubleTap',
    component: DoubleTap,
    decorators: [(Story: FC) => <Story />],
    argTypes: {
        onDoublePress: {
            action: 'onDoublePress',
        },
        onPress: {
            action: 'onPress',
        },
    },
}

export default DoubleTapMeta

export const Basic = {
    args: {
        onDoublePress: () => console.log('onDoublePress'),
        onPress: () => console.log('onPress'),
        children: <View bgColor="red" height="300px" width="300px" />,
    },
}
