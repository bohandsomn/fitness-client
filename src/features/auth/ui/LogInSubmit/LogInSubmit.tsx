import { FC } from 'react'
import { ILogInSubmitProps } from './type'
import { useLogInSubmit } from './useLogInSubmit'
import { AppButton } from '@/shared'

export const LogInSubmit: FC<ILogInSubmitProps> = (props) => {
    const { handleSubmit, header } = useLogInSubmit()
    return (
        <AppButton isDark isWide onPress={handleSubmit} {...props}>
            {header}
        </AppButton>
    )
}
