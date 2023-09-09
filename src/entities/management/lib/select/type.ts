import { ICreateOptimizedContext } from '@/shared'
import { PropsWithChildren } from 'react'

export interface ISelectOptimizedContext<PrivateValue extends string> {
    value: PrivateValue | null
    options: ISelectOption<PrivateValue>[]
}

export interface IUseSelectStateUpdateResult<PrivateValue extends string> {
    select(privateValue: PrivateValue): void
}

export interface ISelectOption<PrivateValue extends string> {
    publicValue: string
    privateValue: PrivateValue
}

export interface ISelectProviderProps extends PropsWithChildren { }

export interface ICreateSelectProviderDto<PrivateValue extends string>
    extends ICreateOptimizedContext {
    initialState: ISelectOptimizedContext<PrivateValue>
}