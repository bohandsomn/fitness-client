import { useMemo } from 'react'
import { useNavigation as useReactNativeNavigation } from '@react-navigation/native'
import { Navigation, INavigation } from '../navigation'

export const useNavigation = <Route extends string = string>(): INavigation<Route> => {
    const reactNativeNavigation = useReactNativeNavigation()
    const navigation = useMemo(
        () => new Navigation(reactNativeNavigation),
        [reactNativeNavigation]
    )
    return navigation
}