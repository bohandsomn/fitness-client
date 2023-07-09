import { IRadioGroupProps } from 'native-base'
import { FC, PropsWithChildren } from 'react'

export interface IAppRadioProps extends
    Omit<IRadioGroupProps, 'value' | 'onChange' | 'children'> {
    Parent?: FC<IParentAppRadioProps>
}

export interface IParentAppRadioProps extends PropsWithChildren {
    value: string
}
