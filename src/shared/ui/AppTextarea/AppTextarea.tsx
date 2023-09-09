import { FC } from 'react'
import { TextArea } from 'native-base'
import { withErrors } from '@/shared/lib'
import { IAppTextareaProps } from './type'
import { useAppTextarea } from './useAppTextarea'

export const AppTextarea: FC<IAppTextareaProps> = withErrors((props) => {
    const { textColor, backgroundColor, placeholderColor } = useAppTextarea()
    return (
        <TextArea
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
            autoCompleteType
            {...props}
        />
    )
})
