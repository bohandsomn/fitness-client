import { FC } from 'react'
import {
    SetsProvider,
    SetsTrainingSection as SetsTrainingSectionEntity,
} from '@/entities'
import { ISetsTrainingSectionProps } from './type'
import { useSetsTrainingSection } from './useSetsTrainingSection'
import { SetsTraining } from '../SetsTraining'

export const SetsTrainingSection: FC<ISetsTrainingSectionProps> = () => {
    const {} = useSetsTrainingSection()
    return (
        <SetsProvider>
            <SetsTrainingSectionEntity setsTraining={<SetsTraining />} />
        </SetsProvider>
    )
}
