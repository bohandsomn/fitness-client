import { FC } from 'react'
import { AppRadio, CreateUserContainer } from '@/entities'
import { AuthConst } from '@/shared'
import { ISelectGenderProps } from './type'
import { useSelectGender } from './useSelectGender'
import { SelectGenderWrapper } from '../SelectGenderWrapper'

export const SelectGender: FC<ISelectGenderProps> = ({ onChangeGender }) => {
    const {} = useSelectGender({ onChangeGender })
    return (
        <CreateUserContainer header={AuthConst.SELECT_YOUR_GENDER}>
            <AppRadio
                name="gender"
                flexDirection="row"
                justifyContent="space-evenly"
                Parent={SelectGenderWrapper}
            />
        </CreateUserContainer>
    )
}
