import { FC } from 'react'
import { Text, View, Progress } from 'native-base'
import { IStepProgressProps } from './type'
import { useStepProgress } from './useStepProgress'

export const StepProgress: FC<IStepProgressProps> = ({
    isShowProgressInNumbers = false,
    rightElement,
}) => {
    const { maxStep, minStep, step, filledTrack, backgroundColor } =
        useStepProgress()
    return (
        <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
        >
            <Progress
                _filledTrack={{ bg: filledTrack }}
                backgroundColor={backgroundColor}
                flex="1"
                marginRight="8px"
                max={maxStep}
                min={minStep}
                value={step}
            />
            {isShowProgressInNumbers ? (
                <View>
                    <Text fontSize="16px">
                        {step + 1}/{maxStep + 1}
                    </Text>
                </View>
            ) : null}
            <View>{rightElement}</View>
        </View>
    )
}
