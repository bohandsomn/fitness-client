import { FC } from 'react'
import { AppRadio, CreateUserContainer } from '@/entities'
import { AuthConst } from '@/shared'
import { ISelectGenderProps } from './type'
import { useSelectGender } from './useSelectGender'
import { SelectGenderWrapper } from '../SelectGenderWrapper'

export const SelectGender: FC<ISelectGenderProps> = ({ onChangeGender }) => {
    const { gender, options, handleChangeGender, header } = useSelectGender({
        onChangeGender,
    })
    return (
        <CreateUserContainer header={header}>
            <AppRadio
                name="gender"
                flexDirection="row"
                justifyContent="space-evenly"
                Parent={SelectGenderWrapper}
                value={gender}
                options={options}
                handleChange={handleChangeGender}
            />
        </CreateUserContainer>
    )
}
