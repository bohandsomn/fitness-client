import { FC } from 'react'
import { SetPreviewTraining as SetPreviewTrainingEntity } from '@/entities'
import { ReadMoreSet, StartSet } from '@/features'
import { ISetPreviewTrainingProps } from './type'
import { useSetPreviewTraining } from './useSetPreviewTraining'

export const SetPreviewTraining: FC<ISetPreviewTrainingProps> = () => {
    const {} = useSetPreviewTraining()
    return (
        <SetPreviewTrainingEntity
            readMore={<ReadMoreSet />}
            start={<StartSet />}
        />
    )
}
