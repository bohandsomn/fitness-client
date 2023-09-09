import { FC } from 'react'
import { AppButton } from '@/shared'
import { INextStepProps } from './type'
import { useNextStep } from './useNextStep'

export const NextStep: FC<INextStepProps> = ({ children, handleConfirm }) => {
    const { handlePress, isEnd, defaultChildren } = useNextStep()
    if (isEnd) {
        return (
            <AppButton isDark onPress={handleConfirm}>
                {children || defaultChildren}
            </AppButton>
        )
    }
    return (
        <AppButton isDark isDisabled={isEnd} onPress={handlePress}>
            {defaultChildren}
        </AppButton>
    )
}
