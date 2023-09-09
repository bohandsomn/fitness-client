import { AppConst } from '@/shared'

export const useWelcome = () => {
    const welcomeTo = AppConst.WELCOME_TO_APP
    const appName = AppConst.APP_NAME
    const description = AppConst.APP_SHORT_DESCRIPTION
    return {
        welcomeTo,
        appName,
        description
    }
}