import React, { FC } from 'react'
import { AppAgenda } from './AppAgenda'
import { AppDate, localeDateAdapter } from '@/shared/lib'
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
        height: '300px',
        currentDate: localeDateAdapter(new AppDate()),
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
        height: '300px',
        currentDate: localeDateAdapter(new AppDate()),
        onChangeCurrentDate: () => {},
        children: (
            <View>
                <Text>CHILDREN</Text>
            </View>
        ),
        minDate: localeDateAdapter(new AppDate(2023, 0, 1)),
    },
}

export const MaxDate = {
    args: {
        height: '300px',
        currentDate: localeDateAdapter(new AppDate()),
        onChangeCurrentDate: () => {},
        children: (
            <View>
                <Text>CHILDREN</Text>
            </View>
        ),
        maxDate: localeDateAdapter(new AppDate(2023, 11, 31)),
    },
}
