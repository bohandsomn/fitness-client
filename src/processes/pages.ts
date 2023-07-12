import { IPage, PageNames } from '@/shared'
import { CreateUser } from './auth'

export const processPages: IPage[] = [
    {
        component: CreateUser,
        options: {
            name: PageNames.CREATE_ACCOUNT
        }
    }
]