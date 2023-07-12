import { FC } from 'react'
import { GoalDateCalendar } from '@/features'
import { ChooseGoalDate as ChooseGoalDateEntity } from '@/entities'
import { IChooseGoalDateProps } from './type'
import { useChooseGoalDate } from './useChooseGoalDate'

export const ChooseGoalDate: FC<IChooseGoalDateProps> = () => {
    const {} = useChooseGoalDate()
    return <ChooseGoalDateEntity calendar={<GoalDateCalendar />} />
}
