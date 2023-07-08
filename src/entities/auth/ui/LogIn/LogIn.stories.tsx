import { FC } from 'react'
import { Text } from 'native-base'
import { AppButton, AppInput, AppLink, AuthConst, PageNames } from '@/shared'
import { LogIn } from './LogIn'

const LogInMeta = {
    title: 'Entities/Auth/LogIn',
    component: LogIn,
    decorators: [(Story: FC) => <Story />],
}

export default LogInMeta

export const Basic = {
    args: {
        emailField: (
            <AppInput value="" placeholder={AuthConst.EMAIL} type="text" />
        ),
        passwordField: (
            <AppInput
                value=""
                placeholder={AuthConst.PASSWORD}
                type="password"
            />
        ),
        logInSubmitButton: (
            <AppButton isDark isWide>
                {AuthConst.LOG_IN}
            </AppButton>
        ),
        createAccountLink: (
            <AppLink
                to={`/${PageNames.CREATE_ACCOUNT_SELECT_GENDER}` as PageNames}
            >
                <Text bold>{AuthConst.CREATE_AN_ACCOUNT}</Text>
            </AppLink>
        ),
    },
}
