import { FC } from 'react'
import { AppImage } from '@/shared'
import { IExercisePayloadProgressProps } from './type'
import { useExercisePayloadProgress } from './useExercisePayloadProgress'
import { ExercisePayload } from '../ExercisePayload'

export const ExercisePayloadProgress: FC<IExercisePayloadProgressProps> =
    () => {
        const { src, alt, width, height, quality } =
            useExercisePayloadProgress()
        return (
            <ExercisePayload
                image={
                    <AppImage
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        quality={quality}
                    />
                }
            />
        )
    }
