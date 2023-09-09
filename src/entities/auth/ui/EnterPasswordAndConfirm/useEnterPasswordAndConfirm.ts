import { AuthConst } from '@/shared'

export const useEnterPasswordAndConfirm = () => {
    const header = AuthConst.CREATE_A_PASSWORD
    return {
        header,
    }
}