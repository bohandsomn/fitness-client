import { FC } from 'react'
import { Center } from 'native-base'
import { AuthConst } from '@/shared'
import { IEnterHeightProps } from './type'
import { useEnterHeight } from './useEnterHeight'
import { CreateUserContainer } from '../CreateUserContainer'

export const EnterHeight: FC<IEnterHeightProps> = ({ heightField }) => {
    const {} = useEnterHeight()
    return (
        <CreateUserContainer header={AuthConst.ENTER_HEIGHT}>
            <Center marginTop="74px">{heightField}</Center>
        </CreateUserContainer>
    )
}
