import { FC } from 'react'
import { AppButton } from '@/shared'
import { IPreviousStepProps } from './type'
import { usePreviousStep } from './usePreviousStep'

export const PreviousStep: FC<IPreviousStepProps> = ({ children }) => {
    const { handlePress, isStart, defaultChildren } = usePreviousStep()
    return (
        <AppButton isDisabled={isStart} onPress={handlePress}>
            {children || defaultChildren}
        </AppButton>
    )
}
