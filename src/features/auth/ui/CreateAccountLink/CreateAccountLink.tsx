import { FC } from 'react'
import { Text } from 'native-base'
import { AppLink, PageNames } from '@/shared'
import { ICreateAccountLinkProps } from './type'
import { useCreateAccountLink } from './useCreateAccountLink'

export const CreateAccountLink: FC<ICreateAccountLinkProps> = () => {
    const { header } = useCreateAccountLink()
    return (
        <AppLink to={`/${PageNames.CREATE_ACCOUNT}`}>
            <Text bold>{header}</Text>
        </AppLink>
    )
}
