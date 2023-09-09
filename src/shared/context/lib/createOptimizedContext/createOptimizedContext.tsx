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
    ICreateOptimizedContext,
    ICreateOptimizedContextResult,
    IProviderProps,
    IUseUpdate as IUseStateUpdate,
} from './type'
import { IMiniStore, MiniStore } from '../miniStore'
import { Exception } from '../../../exception'

export function createOptimizedContext<T>({
    name = '',
}: ICreateOptimizedContext = {}): ICreateOptimizedContextResult<T> {
    const Context = createContext<IMiniStore<T> | null>(null)
    const Provider: FC<IProviderProps<T>> = ({ initialState, children }) => {
        const store = useMemo<IMiniStore<T>>(
            () => new MiniStore(initialState),
            [initialState],
        )
        return <Context.Provider value={store}>{children}</Context.Provider>
    }

    const useStoreContext = () => {
        const store = useContext(Context)
        if (!store) {
            throw new Exception(
                `Can not use 'useStoreContext' outside of the '${name}Provider'`,
            )
        }
        return store
    }

    const useStateUpdate: IUseStateUpdate<T> = () => {
        const store = useStoreContext()
        return store.updateState.bind(store)
    }

    const useStateSelector = <Result extends unknown>(
        selector: (state: T) => Result,
    ): Result => {
        const store = useStoreContext()
        const [result, setResult] = useState(() => selector(store.getState()))
        const selectorRef = useRef(selector)
        const resultRef = useRef(result)

        useLayoutEffect(() => {
            selectorRef.current = selector
            resultRef.current = result
        })

        useEffect(() => {
            const unsubscribe = store.subscribe(() => {
                const result = selectorRef.current(store.getState())
                if (resultRef.current === result) {
                    return
                }
                setResult(result)
            })
            return () => {
                unsubscribe()
            }
        }, [store])

        return result
    }

    return {
        Provider,
        useStateSelector,
        useStateUpdate,
    }
}
