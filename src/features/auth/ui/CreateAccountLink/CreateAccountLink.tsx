import { FC } from 'react'
import { AppLink, AuthConst, PageNames } from '@/shared'
import { ICreateAccountLinkProps } from './type'
import { useCreateAccountLink } from './useCreateAccountLink'
import { Text } from 'native-base'

export const CreateAccountLink: FC<ICreateAccountLinkProps> = () => {
    const {} = useCreateAccountLink()
    return (
        <AppLink to={`/${PageNames.CREATE_ACCOUNT_SELECT_GENDER}` as PageNames}>
            <Text bold>{AuthConst.CREATE_AN_ACCOUNT}</Text>
        </AppLink>
    )
}
