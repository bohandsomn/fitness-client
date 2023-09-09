import { FC } from 'react'
import { Progress, View, Text } from 'native-base'
import { Loading } from '@/shared'
import { IDailyProgressProps } from './type'
import { useDailyProgress } from './useDailyProgress'

export const DailyProgress: FC<IDailyProgressProps> = ({
    errorBoundary,
    ...props
}) => {
    const {
        goalKiloCalories,
        lostKiloCalories,
        min,
        max,
        value,
        backgroundColor,
        filledTrack,
        state,
        header,
        metric,
    } = useDailyProgress()
    if (state.error) {
        return <View paddingX="16px">{errorBoundary}</View>
    }
    if (state.isLoading) {
        return <View paddingY="16px">{<Loading isDark />}</View>
    }
    return (
        <View padding="16px" {...props}>
            <Text fontSize="14px" fontWeight="400" color="white">
                {header}
            </Text>
            <View
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Progress
                    flex="1"
                    marginRight="8px"
                    min={min}
                    value={value}
                    max={max}
                    backgroundColor={backgroundColor}
                    _filledTrack={{ bg: filledTrack }}
                />
                <View>
                    <Text bold fontSize="16px" color="white">
                        {lostKiloCalories}/{goalKiloCalories} {metric}
                    </Text>
                </View>
            </View>
        </View>
    )
}
