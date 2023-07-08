import { FC } from 'react'
import { View, FormControl, Image, Text } from 'native-base'
import { ILogInProps } from './type'
import { useLogIn } from './useLogIn'
import { AuthConst } from '@/shared'

export const LogIn: FC<ILogInProps> = ({
    emailField,
    passwordField,
    logInSubmitButton,
    createAccountLink,
}) => {
    const {} = useLogIn()
    return (
        <FormControl>
            <Image
                source={require('@/shared/assets/images/log-in.png')}
                marginLeft="auto"
                marginRight="auto"
            />
            <View marginTop="24px">{emailField}</View>
            <View marginTop="16px">{passwordField}</View>
            <View marginTop="112px">{logInSubmitButton}</View>
            <View marginTop="16px">
                <Text>
                    {AuthConst.DO_NOT_HAVE_AN_ACCOUNT} {createAccountLink}
                </Text>
            </View>
        </FormControl>
    )
}
