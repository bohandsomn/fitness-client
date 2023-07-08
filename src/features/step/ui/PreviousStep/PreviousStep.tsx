import { FC } from 'react'
import { AppButton, StepConst } from '@/shared'
import { IPreviousStepProps } from './type'
import { usePreviousStep } from './usePreviousStep'

export const PreviousStep: FC<IPreviousStepProps> = ({
    children = StepConst.PREVIOUS_STEP,
}) => {
    const { handlePress } = usePreviousStep()
    return <AppButton onPress={handlePress}>{children}</AppButton>
}
