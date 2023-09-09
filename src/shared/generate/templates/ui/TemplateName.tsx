import { FC } from 'react'
import { Text, View } from 'native-base'
import { ITemplateNameProps } from './type'
import { useTemplateName } from './useTemplateName'

export const TemplateName: FC<ITemplateNameProps> = ({ children }) => {
    const {} = useTemplateName()
    return (
        <View>
            <Text>TemplateName</Text>
            {children}
        </View>
    )
}
