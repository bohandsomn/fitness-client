import React, { FC } from 'react'
import { TotalProgress } from './TotalProgress'
import { LostCaloriesProvider } from '../../providers'
import { Text, View } from 'native-base'

const TotalProgressMeta = {
    title: 'Entities/Calories/TotalProgress',
    component: TotalProgress,
    decorators: [
        (Story: FC) => (
            <LostCaloriesProvider>
                <Story />
            </LostCaloriesProvider>
        ),
    ],
}

export default TotalProgressMeta

export const Basic = {
    args: {
        errorBoundary: (
            <View>
                <Text>Error boundary</Text>
            </View>
        ),
    },
}
