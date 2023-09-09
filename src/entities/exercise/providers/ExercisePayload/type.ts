import { PropsWithChildren } from 'react'
import { ExercisePayloadDto } from '@/shared'

export interface IExercisePayloadOptimizedContext extends ExercisePayloadDto { }
export interface IExercisePayloadProviderProps extends PropsWithChildren {
    data: ExercisePayloadDto
}