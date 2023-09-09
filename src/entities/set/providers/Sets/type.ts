import { IErrorBoundaryAction } from '@/entities/error'
import { IGlobalState } from '@/entities/store'
import { SetPreviewDto } from '@/shared'

export type ISetsOptimizedContext = IGlobalState<SetPreviewDto[]>
export interface IUseSetsStateUpdateResult extends IErrorBoundaryAction { }