import { FC } from 'react'
import { View } from 'native-base'
import { IContainer } from './type'
import { useContainer } from './useContainer'

export const Container: FC<IContainer> = ({ children }) => {
    const {} = useContainer()
    return (
        <View
            height="full"
            paddingTop="8px"
            paddingRight="16px"
            paddingLeft="16px"
            paddingBottom="32px"
            backgroundColor="white"
        >
            {children}
        </View>
    )
}
