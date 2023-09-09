import { useRef } from 'react'
import { GestureResponderEvent } from 'react-native'
import { IDoubleTapProps } from './type'

export const useDoubleTap = ({
    onDoublePress,
    onPress,
}: Pick<IDoubleTapProps, 'onDoublePress' | 'onPress'>) => {
    const ONE_PRESS_DURATION = 300
    const pressCountRef = useRef(0)
    const lastPressTimeRef = useRef(0)

    const handlePress = (event: GestureResponderEvent) => {
        const currentTime = new Date().getTime()
        const timeDelta = currentTime - lastPressTimeRef.current

        if (timeDelta <= ONE_PRESS_DURATION) {
            pressCountRef.current++
            if (pressCountRef.current === 2) {
                onDoublePress?.(event)
                pressCountRef.current = 0
            }
        } else {
            pressCountRef.current = 1
        }

        lastPressTimeRef.current = currentTime

        setTimeout(() => {
            if (pressCountRef.current !== 1) {
                return
            }
            onPress?.(event)
            pressCountRef.current = 0
        }, ONE_PRESS_DURATION)
    }
    return {
        handlePress,
    }
}