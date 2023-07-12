import { FC } from 'react'
import { Text, View } from 'native-base'
import { IChooseGoalDateProps } from './type'
import { useChooseGoalDate } from './useChooseGoalDate'
import { CreateUserContainer } from '../CreateUserContainer'
import { AuthConst } from '@/shared'

export const ChooseGoalDate: FC<IChooseGoalDateProps> = ({ calendar }) => {
    const {} = useChooseGoalDate()
    return (
        <CreateUserContainer header={AuthConst.CHOOSE_GOAL_BIRTH}>
            <View marginTop="16px">{calendar}</View>
        </CreateUserContainer>
    )
}
