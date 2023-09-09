import { FC } from 'react'
import { View } from 'native-base'
import { IContainer } from './type'
import { useContainer } from './useContainer'

export const Container: FC<IContainer> = ({ children }) => {
    const {} = useContainer()
    return (
        <View
            paddingTop="8px"
            paddingX="16px"
            paddingBottom="32px"
            backgroundColor="white"
        >
            {children}
        </View>
    )
}
