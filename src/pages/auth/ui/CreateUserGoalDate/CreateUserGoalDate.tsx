import { FC } from 'react'
import { Text, View } from 'native-base'
import { ICreateUserGoalDateProps } from './type'
import { useCreateUserGoalDate } from './useCreateUserGoalDate'
import { ChooseGoalDate } from '@/widgets'

export const CreateUserGoalDate: FC<ICreateUserGoalDateProps> = () => {
    const {} = useCreateUserGoalDate()
    return <ChooseGoalDate />
}
