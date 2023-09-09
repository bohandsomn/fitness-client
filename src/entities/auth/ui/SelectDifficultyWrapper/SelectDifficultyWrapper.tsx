import { FC } from 'react'
import { View } from 'native-base'
import { ISelectDifficultyWrapperProps } from './type'
import { useSelectDifficultyWrapper } from './useSelectDifficultyWrapper'
import {
    AdvancedLocalImage,
    BeginnerLocalImage,
    IntermediateLocalImage,
    UserDifficulty,
} from '@/shared'

export const SelectDifficultyWrapper: FC<ISelectDifficultyWrapperProps> = ({
    children,
    value,
}) => {
    const {} = useSelectDifficultyWrapper()
    return (
        <View
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            padding="10px 16px 10px 8px"
            width="full"
            borderWidth="1"
            borderStyle="solid"
            borderRadius="8px"
        >
            {children}
            {value === UserDifficulty.BEGINNER ? (
                <BeginnerLocalImage />
            ) : value === UserDifficulty.INTERMEDIATE ? (
                <IntermediateLocalImage />
            ) : (
                <AdvancedLocalImage />
            )}
        </View>
    )
}
