import { FC } from 'react'
import { ILogInSubmitProps } from './type'
import { useLogInSubmit } from './useLogInSubmit'
import { AppButton, AuthConst } from '@/shared'

export const LogInSubmit: FC<ILogInSubmitProps> = (props) => {
    const { handleSubmit } = useLogInSubmit()
    return (
        <AppButton isDark isWide onPress={handleSubmit} {...props}>
            {AuthConst.LOG_IN}
        </AppButton>
    )
}
