import { FC } from 'react'
import { BlurType, IAppBlurProps } from './type'
import { useAppBlur } from './useAppBlur'
import { BlurView } from '@react-native-community/blur'
import { StyleSheet } from 'react-native'

export const AppBlur: FC<IAppBlurProps> = ({
    type = BlurType.DARK,
    amount = 1,
}) => {
    const {} = useAppBlur()
    return (
        <BlurView style={styles.absolute} blurType={type} blurAmount={amount} />
    )
}

const styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})
