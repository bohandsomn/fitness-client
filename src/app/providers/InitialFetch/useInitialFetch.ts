import { useInitialAutoLogIn, useInitialCharacteristics } from '@/entities'

export const useInitialFetch = () => {
    useInitialAutoLogIn()
    useInitialCharacteristics()
}