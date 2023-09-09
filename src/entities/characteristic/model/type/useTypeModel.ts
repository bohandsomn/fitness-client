import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@/entities'
import { getManyTypesAction } from './asyncThunk'
import { ICharacteristicModel } from '../interface'

export const useTypeModel = (): ICharacteristicModel => {
    const characteristics = useAppSelector((state) => state.type)
    const dispatch = useAppDispatch()
    const getMany = useCallback(async () => {
        const { payload } = await dispatch(getManyTypesAction())
        return payload as any
    }, [dispatch])
    return {
        characteristics,
        getMany,
    }
}