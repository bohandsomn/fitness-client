import { FC } from 'react'
import { IWithStackOptions } from './type'
import Stack from '../stack'

export const withStack = <Props extends {}>(
    Page: FC<Props>,
    { name, ...options }: IWithStackOptions,
): FC<Props> => {
    const PageWithStack: FC<Props> = (props) => {
        return (
            <Stack.Screen
                component={() => <Page {...props} />}
                name={name}
                options={options}
            />
        )
    }
    return PageWithStack
}
