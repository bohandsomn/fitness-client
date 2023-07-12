import { IWithErrors } from '@/shared/lib'
import { IInputProps } from 'native-base'

export interface IAppInputProps
    extends Omit<IInputProps, 'placeholderTextColor' |
        'fontSize' |
        'paddingLeft' |
        'paddingTop' |
        'paddingBottom'
    >, IWithErrors { }