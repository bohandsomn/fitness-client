import { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { IDoubleTapProps } from './type'
import { useDoubleTap } from './useDoubleTap'

export const DoubleTap: FC<IDoubleTapProps> = ({
    onDoublePress,
    onPress,
    children,
    ...props
}) => {
    const { handlePress } = useDoubleTap({
        onDoublePress,
        onPress,
    })
    return (
        <TouchableOpacity onPress={handlePress} {...props}>
            {children}
        </TouchableOpacity>
    )
}
