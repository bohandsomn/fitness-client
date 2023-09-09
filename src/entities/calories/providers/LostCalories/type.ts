import { IErrorBoundaryAction } from '@/entities/error'
import { IGlobalState } from '@/entities/store'
import { LocaleDate } from '@/shared'

export type ILostCaloriesOptimizedContext = IGlobalState<{
    lostCalories: number
    goalCalories: number
    currentDate: LocaleDate
}>
export interface IUseLostCaloriesStateUpdateResult extends IErrorBoundaryAction {
    handleRefresh(currentDate: LocaleDate): Promise<void>
}