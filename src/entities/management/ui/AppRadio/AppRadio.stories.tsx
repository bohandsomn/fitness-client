import React, { FC } from 'react'
import { View, Text } from 'native-base'
import { ISelectOption, mockOptions } from '@/entities'
import { AppRadio } from './AppRadio'
import { IParentAppRadioProps } from './type'
import { FemaleLocalImage, MaleLocalImage, UserGender } from '@/shared'

const AppRadioMeta = {
    title: 'Entities/Management/AppRadio',
    component: AppRadio,
    decorators: [(Story: FC) => <Story />],
}

export default AppRadioMeta

export const Basic = {
    args: {
        options: [...mockOptions],
    },
}

export const WithParent = {
    args: {
        Parent: ({ value, children }: IParentAppRadioProps) => {
            return (
                <View
                    borderWidth="1px"
                    borderStyle="solid"
                    borderRadius="5px"
                    padding="8px"
                >
                    <View marginBottom="8px">
                        {value === UserGender.MALE ? (
                            <MaleLocalImage borderRadius="5px" />
                        ) : (
                            <FemaleLocalImage borderRadius="5px" />
                        )}
                    </View>
                    <Text>{children}</Text>
                </View>
            )
        },
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        options: [...mockOptions],
    },
}
