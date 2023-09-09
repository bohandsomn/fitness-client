import { FC } from 'react'
import { BirthDateCalendar } from '@/features'
import { ChooseBirthDate as ChooseBirthDateEntity } from '@/entities'
import { IChooseBirthDateProps } from './type'
import { useChooseBirthDate } from './useChooseBirthDate'

export const ChooseBirthDate: FC<IChooseBirthDateProps> = () => {
    const {} = useChooseBirthDate()
    return <ChooseBirthDateEntity calendar={<BirthDateCalendar />} />
}
