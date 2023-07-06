import { FC } from 'react'
import { View } from 'native-base'
import { IContainer } from './type'
import { useContainer } from './useContainer'

export const Container: FC<IContainer> = ({ children }) => {
    const {} = useContainer()
    return <View padding="16px 24px 16px 0px">{children}</View>
}
