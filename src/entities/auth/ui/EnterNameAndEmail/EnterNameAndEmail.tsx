import { FC } from 'react'
import { Center, Text, View } from 'native-base'
import { AuthConst } from '@/shared'
import { IEnterNameAndEmailProps } from './type'
import { useEnterNameAndEmail } from './useEnterNameAndEmail'

export const EnterNameAndEmail: FC<IEnterNameAndEmailProps> = ({
    nameField,
    emailField,
}) => {
    const {} = useEnterNameAndEmail()
    return (
        <View>
            <Center marginTop="42px">
                <Text bold fontSize="16px">
                    {AuthConst.ENTER_NAME_AND_EMAIL}
                </Text>
            </Center>
            <View marginTop="16px">{nameField}</View>
            <View marginTop="16px" marginBottom="254px">
                {emailField}
            </View>
        </View>
    )
}
