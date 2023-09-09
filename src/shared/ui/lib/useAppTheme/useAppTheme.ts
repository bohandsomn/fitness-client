import { useTheme } from 'native-base'
import { IAppTheme } from './type'

export const useAppTheme = (): IAppTheme => {
    const theme = useTheme()
    return theme as never as IAppTheme
}