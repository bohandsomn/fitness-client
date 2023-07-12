import { FC } from 'react'
import { View } from 'native-base'
import { AuthConst } from '@/shared'
import { IChooseBirthDateProps } from './type'
import { useChooseBirthDate } from './useChooseBirthDate'
import { CreateUserContainer } from '../CreateUserContainer'

export const ChooseBirthDate: FC<IChooseBirthDateProps> = ({ calendar }) => {
    const {} = useChooseBirthDate()
    return (
        <CreateUserContainer header={AuthConst.CHOOSE_DATE_BIRTH}>
            <View marginTop="16px">{calendar}</View>
        </CreateUserContainer>
    )
}
