import { useMemo } from 'react'
import { useCreateSetStateSelector, useCreateSetStateUpdate } from '@/entities'
import { SetConst, SetException, isLength } from '@/shared'

export const useDescriptionCreateSetField = () => {
    const description = useCreateSetStateSelector((state) => state.description)
    const { handleChangeDescription } = useCreateSetStateUpdate()
    const rules = useMemo(() => [
        () => isLength(description || '', 1) ? null : SetException.EMPTY_DESCRIPTION,
    ], [description])
    const placeholder = SetConst.ADD_DESCRIPTION
    return {
        description,
        handleChangeDescription,
        rules,
        placeholder,
    }
}