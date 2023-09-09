import { FC } from 'react'
import { View, FormControl, Text } from 'native-base'
import { ILogInProps } from './type'
import { useLogIn } from './useLogIn'
import { LogInLocalImage } from '@/shared'

export const LogIn: FC<ILogInProps> = ({
    emailField,
    passwordField,
    logInSubmitButton,
    createAccountLink,
}) => {
    const { question } = useLogIn()
    return (
        <FormControl>
            <LogInLocalImage marginLeft="auto" marginRight="auto" />
            <View marginTop="24px">{emailField}</View>
            <View marginTop="16px">{passwordField}</View>
            <View marginTop="112px">{logInSubmitButton}</View>
            <View marginTop="16px">
                <Text>
                    {question} {createAccountLink}
                </Text>
            </View>
        </FormControl>
    )
}
