export interface IStorage<T extends string> {
    get(): Promise<T>
    save(value: T): Promise<void>
    delete(): Promise<void>
}