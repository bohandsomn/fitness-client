import { FC, useCallback, useMemo } from 'react'
import { createOptimizedContext } from '@/shared'
import {
    ICreateSelectProviderDto,
    ISelectOptimizedContext,
    ISelectProviderProps,
    IUseSelectStateUpdateResult,
} from './type'

export function createSelectProvider<PrivateValue extends string>({
    initialState,
    ...props
}: ICreateSelectProviderDto<PrivateValue>) {
    const {
        Provider,
        useStateSelector: useSelectStateSelector,
        useStateUpdate,
    } = createOptimizedContext<ISelectOptimizedContext<PrivateValue>>(props)

    const SelectProvider: FC<ISelectProviderProps> = ({ children }) => {
        return <Provider initialState={initialState}>{children}</Provider>
    }

    const useSelectStateUpdate =
        (): IUseSelectStateUpdateResult<PrivateValue> => {
            const update = useStateUpdate()
            const select = useCallback(
                (privateValue: string) => {
                    update((state) => {
                        const option = state.options.find(
                            (option) => option.privateValue === privateValue,
                        )
                        if (!option) {
                            return state
                        }
                        const value = option.privateValue
                        return {
                            ...state,
                            value,
                        }
                    })
                },
                [update],
            )
            return {
                select,
            }
        }

    return {
        SelectProvider,
        useSelectStateSelector,
        useSelectStateUpdate,
    }
}
