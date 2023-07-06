import { FC } from 'react'
import { Image, ScrollView, Text, View } from 'native-base'
import { IWelcome } from './type'
import { useWelcome } from './useWelcome'
import { AppConst } from '@/shared'

export const Welcome: FC<IWelcome> = ({
    logInButton,
    createAnAccountButton,
}) => {
    const {} = useWelcome()
    return (
        <ScrollView>
            <Image
                source={require('@/shared/assets/images/auth-welcome.png')}
                width="full"
            />
            <Text fontSize="22" textAlign="center" marginTop="4">
                Welcome to the {AppConst.APP_NAME}
            </Text>
            <Text fontSize="14" textAlign="center" marginTop="2">
                {AppConst.APP_SHORT_DESCRIPTION}
            </Text>
            <View marginTop="12">{logInButton}</View>
            <View marginTop="2">{createAnAccountButton}</View>
        </ScrollView>
    )
}
