import { FC } from 'react'
import { View } from 'native-base'
import { AppRadio, CreateUserContainer } from '@/entities'
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
        <CreateUserContainer header={AuthConst.SELECT_YOUR_GENDER}>
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
        </CreateUserContainer>
    )
}
