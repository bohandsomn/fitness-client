import { IAppInputProps } from '@/shared'

export interface IEmailLogInFieldProps
    extends Omit<
        IAppInputProps,
        'value' | 'onChangeText' | 'type' | 'placeholder' | 'rules'
    > { }