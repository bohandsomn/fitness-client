import { FC } from 'react'
import { AppButton, StepConst } from '@/shared'
import { IPreviousStepProps } from './type'
import { usePreviousStep } from './usePreviousStep'

export const PreviousStep: FC<IPreviousStepProps> = ({
    children = StepConst.PREVIOUS_STEP,
}) => {
    const { handlePress, isStart } = usePreviousStep()
    return (
        <AppButton isDisabled={isStart} onPress={handlePress}>
            {children}
        </AppButton>
    )
}
