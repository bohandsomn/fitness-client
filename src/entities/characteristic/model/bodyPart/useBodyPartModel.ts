import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@/entities'
import { getManyBodyPartsAction } from './asyncThunk'
import { ICharacteristicModel } from '../interface'

export const useBodyPartModel = (): ICharacteristicModel => {
    const characteristics = useAppSelector((state) => state.bodyPart)
    const dispatch = useAppDispatch()
    const getMany = useCallback(async () => {
        const { payload } = await dispatch(getManyBodyPartsAction())
        return payload as any
    }, [dispatch])
    return {
        characteristics,
        getMany,
    }
}