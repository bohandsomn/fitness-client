import { FC } from 'react'
import { Center, Text, View } from 'native-base'
import { IEmptyListProps } from './type'
import { useEmptyList } from './useEmptyList'
import { EmptyListLocalImage } from '../images'

export const EmptyList: FC<IEmptyListProps> = ({
    header = 'List is empty',
}) => {
    const {} = useEmptyList()
    return (
        <Center>
            <EmptyListLocalImage
                width="100px"
                height="100px"
                borderRadius="12px"
                marginBottom="8px"
            />
            <Text>{header}</Text>
        </Center>
    )
}
