import { useCallback } from 'react'
import { useSelectGenderStateSelector, useSelectGenderStateUpdate } from '@/entities'
import { ISelectGenderProps } from './type'
import { UserGender } from '@/shared'

export const useSelectGender = ({
    onChangeGender
}: Pick<ISelectGenderProps, 'onChangeGender'>) => {
    const gender = useSelectGenderStateSelector((state): string => state.value || '')
    const options = useSelectGenderStateSelector((state) => state.options)
    const { select } = useSelectGenderStateUpdate()
    const handleChangeGender = useCallback((gender: UserGender) => {
        select(gender)
        onChangeGender?.(gender)
    }, [select, onChangeGender])
    return {
        gender,
        options,
        handleChangeGender,
    }
}