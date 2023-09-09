import { IErrorBoundaryAction } from '@/entities/error'
import { IGlobalState } from '@/entities/store'
import { HistoryDto, ISODate } from '@/shared'

export type IHistoryOptimizedContext = IGlobalState<HistoryDto>
export interface IUseHistoryStateUpdateResult extends IErrorBoundaryAction {
    handleRefresh(date: ISODate): Promise<void>
}