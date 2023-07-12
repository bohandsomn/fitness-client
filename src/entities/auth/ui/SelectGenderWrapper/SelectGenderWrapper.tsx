import { FC } from 'react'
import { View } from 'native-base'
import { ISelectGenderWrapperProps } from './type'
import { useSelectGenderWrapper } from './useSelectGenderWrapper'
import { FemaleLocalImage, MaleLocalImage, UserGender } from '@/shared'

export const SelectGenderWrapper: FC<ISelectGenderWrapperProps> = ({
    children,
    value,
}) => {
    const {} = useSelectGenderWrapper()
    return (
        <View
            borderWidth="1px"
            borderStyle="solid"
            borderRadius="10px"
            padding="8px"
            marginTop="24px"
            marginBottom="161px"
        >
            <View marginBottom="8px">
                {value === UserGender.MALE ? (
                    <MaleLocalImage borderRadius="10px" />
                ) : (
                    <FemaleLocalImage borderRadius="10px" />
                )}
            </View>
            <View>{children}</View>
        </View>
    )
}
