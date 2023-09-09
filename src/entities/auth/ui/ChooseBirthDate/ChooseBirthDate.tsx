import { FC } from 'react'
import { View } from 'native-base'
import { IChooseBirthDateProps } from './type'
import { useChooseBirthDate } from './useChooseBirthDate'
import { CreateUserContainer } from '../CreateUserContainer'

export const ChooseBirthDate: FC<IChooseBirthDateProps> = ({ calendar }) => {
    const { header } = useChooseBirthDate()
    return (
        <CreateUserContainer header={header}>
            <View marginTop="16px">{calendar}</View>
        </CreateUserContainer>
    )
}
