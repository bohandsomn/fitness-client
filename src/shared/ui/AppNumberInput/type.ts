import { IInputProps } from 'native-base'
import { IWithErrors } from '@/shared/lib'

export interface IAppNumberInputProps
    extends Omit<IInputProps,
        'value' |
        'onChangeText' |
        'backgroundColor' |
        'borderRadius' |
        'placeholderTextColor' |
        'paddingTop' |
        'paddingBottom' |
        'paddingRight' |
        'paddingLeft' |
        'fontSize' |
        'fontWeight' |
        'alignSelf' |
        'borderWidth' |
        'rightElement' |
        'width'
    >, IWithErrors {
    value?: number
    onChangeText?(value: number): void
    rightText?: string
    max?: number | `${number}`
    min?: number | `${number}`
}