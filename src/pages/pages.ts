import { IPage, PageNames } from '@/shared'
import { Home } from './home'

export const pages: IPage[] = [
    {
        component: Home,
        options: {
            name: PageNames.HOME,
        }
    }
]
export const initialPage = PageNames.HOME