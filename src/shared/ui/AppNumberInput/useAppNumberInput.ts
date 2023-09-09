import { useCallback } from 'react'
import { IAppNumberInputProps } from './type'

export const useAppNumberInput = ({
    onChangeText,
    max,
    min,
}: Pick<IAppNumberInputProps, 'onChangeText' | 'max' | 'min'>) => {
    const handleChange = useCallback((value: string) => {
        const integerValue = parseInt(value)
        if (Number.isNaN(integerValue)) {
            return
        }
        if (
            (typeof max === 'number' && (integerValue > max)) ||
            (typeof min === 'number' && (integerValue < min))
        ) {
            return
        }
        onChangeText?.(integerValue)
    }, [onChangeText, max, min])
    return {
        handleChange,
    }
}