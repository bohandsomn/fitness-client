import { IMiniStore } from './type'

export class MiniStore<T> implements IMiniStore<T> {
    private readonly subscriptions: Set<() => void> = new Set<() => void>()

    constructor(
        private state: T
    ) { }

    getState(): T {
        return this.state
    }

    updateState(partialNewState: Partial<T>): void {
        this.state = { ...this.state, ...partialNewState }
        this.subscriptions.forEach((cb) => cb())
    }

    subscribe(callback: () => void): () => void {
        this.subscriptions.add(callback)
        return () => {
            this.subscriptions.delete(callback)
        }
    }
}