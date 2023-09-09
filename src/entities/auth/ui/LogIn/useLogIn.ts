import { AuthConst } from '@/shared'

export const useLogIn = () => {
    const question = AuthConst.DO_NOT_HAVE_AN_ACCOUNT
    return {
        question,
    }
}