import {
    useContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    useMemo,
    createContext,
    FC,
} from 'react'
import {
    ICreateOptimizedContextResult,
    IProviderProps,
    IUseUpdate,
} from './type'
import { IMiniStore, MiniStore } from '../miniStore'
import { Exception } from '../../../exception'

export function createOptimizedContext<T>(): ICreateOptimizedContextResult<T> {
    const Context = createContext<IMiniStore<T> | null>(null)
    const Provider: FC<IProviderProps<T>> = ({ initialState, children }) => {
        const store = useMemo(
            (): IMiniStore<T> => new MiniStore(initialState),
            [],
        )
        return <Context.Provider value={store}>{children}</Context.Provider>
    }

    const useStore = () => {
        const store = useContext(Context)
        if (!store) {
            throw new Exception(
                'Can not use `useStore` outside of the `Provider`',
            )
        }
        return store
    }

    const useStateSelector = <Result extends any>(
        selector: (state: T) => Result,
    ): Result => {
        const store = useStore()
        const [state, setState] = useState(() => selector(store.getState()))
        const selectorRef = useRef(selector)
        const stateRef = useRef(state)

        useLayoutEffect(() => {
            selectorRef.current = selector
            stateRef.current = state
        })

        useEffect(() => {
            const unsubscribe = store.subscribe(() => {
                const state = selectorRef.current(store.getState())
                if (stateRef.current === state) {
                    return
                }
                setState(state)
            })
            return () => {
                unsubscribe()
            }
        }, [store])

        return state
    }

    const useUpdate: IUseUpdate<T> = () => {
        const store = useStore()
        return store.updateState
    }

    return {
        Provider,
        useStateSelector,
        useUpdate,
    }
}
