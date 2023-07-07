import { IMiniStore } from './type'

export class MiniStore<T> implements IMiniStore<T> {
    private readonly subscriptions: Set<() => void> = new Set()

    constructor(
        private state: T
    ) { }

    getState(): T {
        return this.state
    }

    updateState(state: Partial<T>): void {
        this.state = { ...this.state, ...state }
        this.subscriptions.forEach((callback) => callback())
    }

    subscribe(callback: () => void): () => void {
        this.subscriptions.add(callback)
        return () => {
            this.subscriptions.delete(callback)
        }
    }
}