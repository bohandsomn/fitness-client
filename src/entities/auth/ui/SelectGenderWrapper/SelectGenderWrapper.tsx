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
            borderRadius="12px"
            padding="8px"
            paddingBottom="16px"
            marginTop="24px"
        >
            <View marginBottom="18px">
                {value === UserGender.MALE ? (
                    <MaleLocalImage borderRadius="12px" />
                ) : (
                    <FemaleLocalImage borderRadius="12px" />
                )}
            </View>
            <View>{children}</View>
        </View>
    )
}
