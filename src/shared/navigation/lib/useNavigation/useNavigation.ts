import { useMemo } from 'react'
import { useNavigation as useReactNativeNavigation } from '@react-navigation/native'
import { Navigation, INavigation } from '../navigation'
import { PageNames } from '../../const'

export const useNavigation = (): INavigation<PageNames> => {
    const reactNativeNavigation = useReactNativeNavigation()
    const navigation = useMemo(
        () => new Navigation(reactNativeNavigation),
        [reactNativeNavigation]
    )
    return navigation
}