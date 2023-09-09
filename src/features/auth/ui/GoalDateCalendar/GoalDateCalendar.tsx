import { FC } from 'react'
import { IGoalDateCalendarProps } from './type'
import { useGoalDateCalendar } from './useGoalDateCalendar'
import { AppCalendar } from '@/shared'

export const GoalDateCalendar: FC<IGoalDateCalendarProps> = () => {
    const { goalDate, changeGoalDate, minDate } = useGoalDateCalendar()
    return (
        <AppCalendar
            currentDate={goalDate}
            onChangeCurrentDate={changeGoalDate}
            minDate={minDate}
        />
    )
}
