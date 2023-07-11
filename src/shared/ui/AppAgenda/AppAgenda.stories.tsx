import React, { FC } from 'react'
import { AppAgenda } from './AppAgenda'
import { localeDateAdapter } from '@/shared/lib'
import { Text, View } from 'native-base'

const AppAgendaMeta = {
    title: 'Shared/AppAgenda',
    component: AppAgenda,
    decorators: [(Story: FC) => <Story />],
    argTypes: {
        onChangeCurrentDate: {
            action: 'onChangeCurrentDate',
        },
    },
}

export default AppAgendaMeta

export const Basic = {
    args: {
        currentDate: localeDateAdapter(new Date()),
        onChangeCurrentDate: () => {},
        children: (
            <View>
                <Text>CHILDREN</Text>
            </View>
        ),
    },
}

export const MinDate = {
    args: {
        currentDate: localeDateAdapter(new Date()),
        onChangeCurrentDate: () => {},
        children: (
            <View>
                <Text>CHILDREN</Text>
            </View>
        ),
        minDate: localeDateAdapter(new Date(2023, 0, 1)),
    },
}

export const MaxDate = {
    args: {
        currentDate: localeDateAdapter(new Date()),
        onChangeCurrentDate: () => {},
        children: (
            <View>
                <Text>CHILDREN</Text>
            </View>
        ),
        maxDate: localeDateAdapter(new Date(2023, 11, 31)),
    },
}
