import { IPage, PageNames } from '@/shared'
import { Welcome } from './auth'
import { LogIn } from './auth'
import { Progress, Trainings } from './trainings'
import { Discover } from './discover'
import { Account } from './account'

export const pages: IPage[] = [
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
    },
    {
        component: Trainings,
        options: {
            name: PageNames.TRAININGS,
        }
    },
    {
        component: Progress,
        options: {
            name: PageNames.PROGRESS,
        }
    },
    {
        component: Discover,
        options: {
            name: PageNames.DISCOVER,
        }
    },
    {
        component: Account,
        options: {
            name: PageNames.ACCOUNT,
        }
    }
]
export const initialPage = PageNames.TRAININGS