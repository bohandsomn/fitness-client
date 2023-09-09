import { useEffect } from 'react'
import { useBodyPartModel, useTypeModel } from '../../model'

export const useInitialCharacteristics = () => {
    const { getMany: getManyBodyPart } = useBodyPartModel()
    const { getMany: getManyType } = useTypeModel()
    useEffect(() => {
        getManyBodyPart()
        getManyType()
    }, [])
}