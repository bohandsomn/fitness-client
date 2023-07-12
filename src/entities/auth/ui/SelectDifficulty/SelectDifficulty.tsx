import { FC } from 'react'
import { AppRadio } from '@/entities/management'
import { AuthConst } from '@/shared'
import { ISelectDifficultyProps } from './type'
import { useSelectDifficulty } from './useSelectDifficulty'
import { CreateUserContainer } from '../CreateUserContainer'
import { SelectDifficultyWrapper } from '../SelectDifficultyWrapper'

export const SelectDifficulty: FC<ISelectDifficultyProps> = ({
    onChangeDifficulty,
}) => {
    const { difficulty, options, handleChangeDifficulty } = useSelectDifficulty(
        { onChangeDifficulty },
    )
    return (
        <CreateUserContainer header={AuthConst.SELECT_YOUR_DIFFICULTY}>
            <AppRadio
                name="difficulty"
                Parent={SelectDifficultyWrapper}
                value={difficulty}
                options={options}
                handleChange={handleChangeDifficulty}
                space="sm"
                marginTop="16px"
            />
        </CreateUserContainer>
    )
}
