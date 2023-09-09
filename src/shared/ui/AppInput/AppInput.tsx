import { FC } from 'react'
import { Input } from 'native-base'
import { IAppInputProps } from './type'
import { useAppInput } from './useAppInput'
import { withErrors } from '@/shared/lib'

export const AppInput: FC<IAppInputProps> = withErrors((props) => {
    const { textColor, backgroundColor, placeholderColor } = useAppInput()
    return (
        <Input
            color={textColor}
            placeholderTextColor={placeholderColor}
            fontSize="16"
            fontFamily="Roboto"
            paddingLeft="16px"
            paddingTop="12px"
            paddingBottom="12px"
            borderStyle="solid"
            borderWidth="1"
            borderColor={backgroundColor}
            borderRadius="4px"
            {...props}
        />
    )
})
