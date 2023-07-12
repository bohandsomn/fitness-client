import { FC } from 'react'
import { Input } from 'native-base'
import { IAppInputProps } from './type'
import { useAppInput } from './useAppInput'
import { withErrors } from '@/shared/lib'

export const AppInput: FC<IAppInputProps> = withErrors((props) => {
    const {} = useAppInput()
    return (
        <Input
            placeholderTextColor="#49454F"
            fontSize="16"
            paddingLeft="4"
            paddingTop="2"
            paddingBottom="2"
            {...props}
        />
    )
})
