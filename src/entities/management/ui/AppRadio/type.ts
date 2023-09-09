import { IRadioGroupProps } from 'native-base'
import { FC, PropsWithChildren } from 'react'
import { ISelectOption } from '../../lib'

export interface IAppRadioProps extends
    Omit<IRadioGroupProps, 'value' | 'onChange' | 'children'> {
    Parent?: FC<IParentAppRadioProps>
    value: string
    options: ISelectOption<string>[]
    handleChange(privateValue: string): void
}

export interface IParentAppRadioProps extends PropsWithChildren {
    value: string
}
