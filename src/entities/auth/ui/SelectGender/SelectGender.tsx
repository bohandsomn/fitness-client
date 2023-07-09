import { FC } from 'react'
import { Text, View, Center } from 'native-base'
import { AppRadio } from '@/entities'
import {
    AuthConst,
    FemaleLocalImage,
    MaleLocalImage,
    UserGender,
} from '@/shared'
import { ISelectGenderProps } from './type'
import { useSelectGender } from './useSelectGender'

export const SelectGender: FC<ISelectGenderProps> = ({ onChangeGender }) => {
    const {} = useSelectGender({ onChangeGender })
    return (
        <View>
            <Center marginTop="57px">
                <Text fontSize="16px" bold>
                    {AuthConst.SELECT_YOUR_GENDER}
                </Text>
            </Center>
            <AppRadio
                name="gender"
                flexDirection="row"
                justifyContent="space-evenly"
                Parent={({ value, children }) => {
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
                }}
            />
        </View>
    )
}
