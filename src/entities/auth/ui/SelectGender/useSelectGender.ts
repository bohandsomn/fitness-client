import { useCallback } from 'react'
import { useSelectGenderStateSelector, useSelectGenderStateUpdate } from '@/entities'
import { AuthConst, UserGender } from '@/shared'
import { ISelectGenderProps } from './type'

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
    const header = AuthConst.SELECT_YOUR_GENDER
    return {
        gender,
        options,
        handleChangeGender,
        header,
    }
}