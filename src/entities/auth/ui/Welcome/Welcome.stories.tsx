import { FC } from 'react'
import { Welcome } from './Welcome'
import { AppButton, AuthConst } from '@/shared'

const WelcomeMeta = {
    title: 'Entity/Auth/Welcome',
    component: Welcome,
    decorators: [(Story: FC) => <Story />],
}

export default WelcomeMeta

export const Basic = {
    args: {
        logInButton: (
            <AppButton isWide isDark fontSize="lg">
                {AuthConst.LOG_IN}
            </AppButton>
        ),
        createAnAccountButton: (
            <AppButton isWide fontSize="lg">
                {AuthConst.CREATE_AN_ACCOUNT}
            </AppButton>
        ),
    },
}
