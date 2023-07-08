import { FC } from 'react'
import { AppButton, StepConst } from '@/shared'
import { INextStepProps } from './type'
import { useNextStep } from './useNextStep'

export const NextStep: FC<INextStepProps> = ({
    children = StepConst.NEXT_STEP,
}) => {
    const { handlePress } = useNextStep()
    return (
        <AppButton isDark onPress={handlePress}>
            {children}
        </AppButton>
    )
}
