import { useCallback, useEffect } from 'react'
import { welcomeBooleanStorage } from '@/shared'
import { useStateUpdate } from './context'
import { IUseWelcomeStateUpdateResult } from './type'

export const useWelcomeStateUpdate = (): IUseWelcomeStateUpdateResult => {
    const update = useStateUpdate()
    useEffect(() => {
        const getWelcomeBoolean = async (): Promise<void> => {
            try {
                const isChecked = await welcomeBooleanStorage.get()
                update({ isChecked: isChecked === 'true' })
            } catch (error) {
                welcomeBooleanStorage.save('false')
                update({ isChecked: false })
            }
        }
        getWelcomeBoolean()
    }, [])

    const check = useCallback(() => {
        update({ isChecked: true })
        welcomeBooleanStorage.save('true')
    }, [])

    return {
        check,
    }
}