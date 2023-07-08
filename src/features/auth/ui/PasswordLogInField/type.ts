import { IAppInputProps } from '@/shared'

export interface IPasswordLogInFieldProps
    extends Omit<
        IAppInputProps,
        'value' | 'onChangeText' | 'type' | 'placeholder' | 'rules'
    > { }