import { PropsWithChildren } from 'react'
import { SetPreviewDto } from '@/shared'

export interface ISetPreviewOptimizedContext extends SetPreviewDto { }

export interface ISetPreviewProviderProps extends PropsWithChildren {
    data: SetPreviewDto
}
