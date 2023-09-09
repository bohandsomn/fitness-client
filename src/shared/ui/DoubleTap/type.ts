import { TouchableOpacityProps } from 'react-native'

export interface IDoubleTapProps extends TouchableOpacityProps {
    onDoublePress?: TouchableOpacityProps['onPress']
}