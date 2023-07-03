import AsyncStorage from '@react-native-async-storage/async-storage'
import { IStorage } from './type'
import { Exception } from '../exception'

export class LocalStorage implements IStorage {
    constructor(
        private readonly key: string
    ) { }

    async get(): Promise<string> {
        const value = await AsyncStorage.getItem(this.key)
        if (typeof value !== 'string') {
            throw new Exception(`Value with key ${this.key} is not a string`)
        }
        return value
    }

    async save(value: string): Promise<void> {
        await AsyncStorage.setItem(this.key, value)
    }

    async delete(): Promise<void> {
        await AsyncStorage.removeItem(this.key)
    }
}