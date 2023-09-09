import { PropsWithChildren } from 'react'
import { UpdateSetDto } from '@/shared'

export interface ICreateSetOptimizedContext extends Partial<UpdateSetDto> { }
export interface IUseCreateSetStateUpdateResult {
    handleChangeName(name: string): void
    handleChangeDescription(description: string): void
    handleSetImage(): void
}

export interface ICreateSetProviderProps extends PropsWithChildren {
    data?: ICreateSetOptimizedContext
}
