import { FC } from 'react'
import { Center } from 'native-base'
import { IEnterHeightProps } from './type'
import { useEnterHeight } from './useEnterHeight'
import { CreateUserContainer } from '../CreateUserContainer'

export const EnterHeight: FC<IEnterHeightProps> = ({ heightField }) => {
    const { header } = useEnterHeight()
    return (
        <CreateUserContainer header={header}>
            <Center marginTop="74px">{heightField}</Center>
        </CreateUserContainer>
    )
}
