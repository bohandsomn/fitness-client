import { IGlobalState } from '@/entities'
import { IMiniStore } from '../miniStore'

export type IUpdateStateParameters<T> = Parameters<IMiniStore<IGlobalState<T>>['updateState']>[0]