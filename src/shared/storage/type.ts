export interface IStorage {
    get(): Promise<string>
    save(value: string): Promise<void>
    delete(): Promise<void>
}