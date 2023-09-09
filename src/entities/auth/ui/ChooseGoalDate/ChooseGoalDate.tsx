import { FC } from 'react'
import { View } from 'native-base'
import { IChooseGoalDateProps } from './type'
import { useChooseGoalDate } from './useChooseGoalDate'
import { CreateUserContainer } from '../CreateUserContainer'

export const ChooseGoalDate: FC<IChooseGoalDateProps> = ({ calendar }) => {
    const { header } = useChooseGoalDate()
    return (
        <CreateUserContainer header={header}>
            <View marginTop="16px">{calendar}</View>
        </CreateUserContainer>
    )
}
