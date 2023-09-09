import { FC } from 'react'
import { Progress, Text, View } from 'native-base'
import { Loading } from '@/shared'
import { ITotalProgressProps } from './type'
import { useTotalProgress } from './useTotalProgress'

export const TotalProgress: FC<ITotalProgressProps> = ({ errorBoundary }) => {
    const {
        goalKiloCalories,
        lostKiloCalories,
        textColor,
        backgroundColorContainer,
        backgroundColor,
        filledTrack,
        min,
        max,
        value,
        state,
        lost,
        main,
        metric,
    } = useTotalProgress()
    if (state.isLoading) {
        return <Loading />
    }
    if (state.error) {
        return errorBoundary
    }
    return (
        <View
            paddingX="20px"
            paddingY="16px"
            borderRadius="20px"
            bgColor={backgroundColorContainer}
        >
            <View
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                marginBottom="10px"
            >
                <View>
                    <Text color={textColor}>{lost}</Text>
                    <Text
                        color={textColor}
                        bold
                    >{`${lostKiloCalories} ${metric}`}</Text>
                </View>
                <View>
                    <Text color={textColor}>{main}</Text>
                    <Text
                        color={textColor}
                        bold
                    >{`${goalKiloCalories} ${metric}`}</Text>
                </View>
            </View>
            <Progress
                min={min}
                value={value}
                max={max}
                backgroundColor={backgroundColor}
                _filledTrack={{ bg: filledTrack }}
            />
        </View>
    )
}
