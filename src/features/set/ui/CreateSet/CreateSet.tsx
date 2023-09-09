import { FC } from 'react'
import { AppButton } from '@/shared'
import { ICreateSetProps } from './type'
import { useCreateSetLocal } from './useCreateSet'

export const CreateSet: FC<ICreateSetProps> = () => {
    const { handlePress, header } = useCreateSetLocal()
    return (
        <AppButton isDark onPress={handlePress}>
            {header}
        </AppButton>
    )
}
