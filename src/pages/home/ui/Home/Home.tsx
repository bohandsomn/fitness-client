import { FC } from 'react'
import { Text, View } from 'native-base'
import { IHomeProps } from './type'
import { Container } from '@/shared'

export const Home: FC<IHomeProps> = () => {
    return (
        <Container>
            <View>
                <Text>Home</Text>
            </View>
        </Container>
    )
}
