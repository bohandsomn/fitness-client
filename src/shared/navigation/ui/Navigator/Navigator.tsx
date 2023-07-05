import React, { FC } from 'react'
import { INavigatorProps } from './type'
import Stack from '../../stack'

export const Navigator: FC<INavigatorProps> = ({ pages, initialPage }) => {
    return (
        <Stack.Navigator initialRouteName={initialPage}>
            {pages.map((Page, index) => (
                <Page key={index} />
            ))}
        </Stack.Navigator>
    )
}
