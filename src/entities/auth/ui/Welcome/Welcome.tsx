import { FC } from 'react'
import { Text, View, FormControl } from 'native-base'
import { IWelcomeProps } from './type'
import { useWelcome } from './useWelcome'
import { AppConst, AuthWelcomeLocalImage } from '@/shared'

export const Welcome: FC<IWelcomeProps> = ({
    logInButton,
    createAnAccountButton,
}) => {
    const {} = useWelcome()
    return (
        <FormControl>
            <AuthWelcomeLocalImage width="full" />
            <Text fontSize="22" textAlign="center" marginTop="4">
                Welcome to the {AppConst.APP_NAME}
            </Text>
            <Text fontSize="14" textAlign="center" marginTop="2">
                {AppConst.APP_SHORT_DESCRIPTION}
            </Text>
            <View marginTop="12">{logInButton}</View>
            <View marginTop="2">{createAnAccountButton}</View>
        </FormControl>
    )
}
