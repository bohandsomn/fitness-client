import { useMemo } from 'react'
import { useCreateSetStateSelector, useCreateSetStateUpdate } from '@/entities'
import { SetConst, SetException, isLength } from '@/shared'

export const useNameCreateSetField = () => {
    const name = useCreateSetStateSelector((state) => state.name)
    const { handleChangeName } = useCreateSetStateUpdate()
    const rules = useMemo(() => [
        () => isLength(name || '', 1) ? null : SetException.EMPTY_NAME,
    ], [name])
    const placeholder = SetConst.SET_NAME
    return {
        name,
        handleChangeName,
        rules,
        placeholder,
    }
}