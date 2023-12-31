import { FC } from 'react'
import { Row, View } from 'native-base'
import { StepProgress } from '@/entities'
import { PreviousStep, NextStep } from '@/features'
import { IWithStepControllerProps } from './type'
import { useWithStepController } from './useWithStepController'

export const WithStepController: FC<IWithStepControllerProps> = ({
    rightStepProgressElement,
    previousStepLabel,
    nextStepLabel,
    handleConfirm,
    children,
    ...props
}) => {
    const {} = useWithStepController()
    return (
        <View {...props}>
            <StepProgress
                isShowProgressInNumbers
                rightElement={rightStepProgressElement}
            />
            {children}
            <Row justifyContent="space-between">
                <PreviousStep>{previousStepLabel}</PreviousStep>
                <NextStep handleConfirm={handleConfirm}>
                    {nextStepLabel}
                </NextStep>
            </Row>
        </View>
    )
}
