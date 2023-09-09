import { FC } from 'react'
import { CircleIcon, Text, View } from 'native-base'
import { AppLink } from '@/shared'
import { INavigationLinkProps } from './type'
import { useNavigationLink } from './useNavigationLink'

export const NavigationLink: FC<INavigationLinkProps> = ({ header, route }) => {
    const { textColor } = useNavigationLink(route)
    return (
        <AppLink to={`/${route}`}>
            <View alignItems="center">
                <CircleIcon color={textColor} marginBottom="8px" />
                <Text color={textColor}>{header}</Text>
            </View>
        </AppLink>
    )
}
