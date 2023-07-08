import { IPage, PageNames } from '@/shared'
import { Home } from './home'
import { Welcome } from './auth'
import { LogIn } from './auth'

export const pages: IPage[] = [
    {
        component: Home,
        options: {
            name: PageNames.HOME,
        }
    },
    {
        component: Welcome,
        options: {
            name: PageNames.WELCOME,
        }
    },
    {
        component: LogIn,
        options: {
            name: PageNames.LOG_IN,
        }
    }
]
export const initialPage = PageNames.HOME