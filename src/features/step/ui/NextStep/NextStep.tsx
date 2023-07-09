import { FC } from 'react'
import { AppButton, StepConst } from '@/shared'
import { INextStepProps } from './type'
import { useNextStep } from './useNextStep'

export const NextStep: FC<INextStepProps> = ({
    children = StepConst.NEXT_STEP,
    handleConfirm,
}) => {
    const { handlePress, isEnd } = useNextStep()
    if (isEnd) {
        return (
            <AppButton isDark onPress={handleConfirm}>
                {children}
            </AppButton>
        )
    }
    return (
        <AppButton isDark isDisabled={isEnd} onPress={handlePress}>
            {StepConst.NEXT_STEP}
        </AppButton>
    )
}
