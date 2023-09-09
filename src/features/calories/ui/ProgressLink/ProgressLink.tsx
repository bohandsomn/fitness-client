import { FC } from 'react'
import { Text, ChevronRightIcon, View } from 'native-base'
import { IProgressLinkProps } from './type'
import { useProgressLink } from './useProgressLink'

export const ProgressLink: FC<IProgressLinkProps> = () => {
    const { handlePress, header } = useProgressLink()
    return (
        <View
            justifyContent="space-between"
            flexDirection="row"
            alignItems="center"
        >
            <Text bold fontSize="16px" color="white" onPress={handlePress}>
                {header}
            </Text>
            <ChevronRightIcon color="white" />
        </View>
    )
}
