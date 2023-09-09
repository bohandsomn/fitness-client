import { FC } from 'react'
import { AppButton } from '@/shared'
import { IStartSetProps } from './type'
import { useStartSet } from './useStartSet'

export const StartSet: FC<IStartSetProps> = () => {
    const { handlePress, header } = useStartSet()
    return (
        <AppButton isDark onPress={handlePress}>
            {header}
        </AppButton>
    )
}
