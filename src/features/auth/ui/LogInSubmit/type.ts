import { IAppButton } from '@/shared'

export interface ILogInSubmitProps
    extends Omit<
        IAppButton,
        'onPress' |
        'children' |
        'isDark' |
        'isWide'
    > { }