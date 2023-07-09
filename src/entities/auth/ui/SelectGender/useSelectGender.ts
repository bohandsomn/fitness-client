import { useEffect } from 'react'
import { useSelectGenderStateSelector } from '@/entities'
import { ISelectGenderProps } from './type'

export const useSelectGender = ({
    onChangeGender
}: Pick<ISelectGenderProps, 'onChangeGender'>) => {
    const gender = useSelectGenderStateSelector((state) => state.value)
    useEffect(() => {
        if (!gender) {
            return
        }
        onChangeGender?.(gender)
    }, [gender])
    return {

    }
}