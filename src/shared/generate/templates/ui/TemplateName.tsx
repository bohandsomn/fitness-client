import { FC } from 'react'
import { Text, View } from 'native-base'
import { ITemplateName } from './type'
import { useTemplateName } from './useTemplateName'

export const TemplateName: FC<ITemplateName> = ({ children }) => {
    const {} = useTemplateName()
    return (
        <View>
            <Text>TemplateName</Text>
            {children}
        </View>
    )
}
