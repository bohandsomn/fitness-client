import { FC } from 'react'
import { Text, View } from 'native-base'
import { IExercisePayloadProps } from './type'
import { useExercisePayload } from './useExercisePayload'
import { CaloriesConst } from '@/shared'

export const ExercisePayload: FC<IExercisePayloadProps> = ({
    image,
    right,
}) => {
    const { header, calories, backgroundColor, metric } = useExercisePayload()
    return (
        <View
            bgColor={backgroundColor}
            display="flex"
            flexDirection="row"
            paddingX="16px"
            paddingY="12px"
        >
            <View marginRight="16px">{image}</View>
            <View
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
            >
                <Text fontSize="16px">{header}</Text>
                <Text>{`${calories} ${metric}`}</Text>
            </View>
            <View marginLeft="auto" alignSelf="center">
                {right}
            </View>
        </View>
    )
}
