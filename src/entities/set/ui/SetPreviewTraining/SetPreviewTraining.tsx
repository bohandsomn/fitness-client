import { FC } from 'react'
import { Text, View } from 'native-base'
import { AppImage } from '@/shared'
import { ISetPreviewTrainingProps } from './type'
import { useSetPreviewTraining } from './useSetPreviewTraining'

export const SetPreviewTraining: FC<ISetPreviewTrainingProps> = ({
    readMore,
    start,
}) => {
    const { src, height, width, alt, name, kilocalories, metric } =
        useSetPreviewTraining()
    return (
        <View
            display="flex"
            flexDirection="row"
            padding="16px"
            borderRadius="12px"
            width="full"
        >
            <AppImage
                borderRadius="8px"
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
            <View marginLeft="16px" flex="1">
                <Text bold>{name}</Text>
                <Text>{`${kilocalories} ${metric}`}</Text>
                <View
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    marginTop="auto"
                >
                    <View>{readMore}</View>
                    <View>{start}</View>
                </View>
            </View>
        </View>
    )
}
