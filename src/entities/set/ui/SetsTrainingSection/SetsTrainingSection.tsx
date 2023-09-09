import { FC } from 'react'
import { Text, View } from 'native-base'
import { ISetsTrainingSectionProps } from './type'
import { useSetsTrainingSection } from './useSetsTrainingSection'

export const SetsTrainingSection: FC<ISetsTrainingSectionProps> = ({
    setsTraining,
}) => {
    const { header } = useSetsTrainingSection()
    return (
        <View>
            <Text marginBottom="8pm" fontSize="16px" bold>
                {header}
            </Text>
            <View>{setsTraining}</View>
        </View>
    )
}
