import { FC } from 'react'
import { AppTextarea } from '@/shared'
import { IDescriptionCreateSetFieldProps } from './type'
import { useDescriptionCreateSetField } from './useDescriptionCreateSetField'

export const DescriptionCreateSetField: FC<
    IDescriptionCreateSetFieldProps
> = () => {
    const { description, handleChangeDescription, rules, placeholder } =
        useDescriptionCreateSetField()
    return (
        <AppTextarea
            value={description}
            onChangeText={handleChangeDescription}
            rules={rules}
            placeholder={placeholder}
        />
    )
}
