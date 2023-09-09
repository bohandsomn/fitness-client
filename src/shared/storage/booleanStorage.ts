import AsyncStorage from '@react-native-async-storage/async-storage'
import { IStorage } from './type'
import { Exception } from '../exception'

export class BooleanStorage implements IStorage<`${boolean}`> {
    constructor(
        private readonly key: string
    ) { }

    async get(): Promise<`${boolean}`> {
        const value = await AsyncStorage.getItem(this.key)
        if (typeof value !== 'string') {
            throw new Exception(`Value with key ${this.key} is not a string`)
        }
        if (value !== 'true' && value !== 'false') {
            throw new Exception(`Value with key ${this.key} is not a boolean`)
        }
        return value
    }

    async save(value: `${boolean}`): Promise<void> {
        await AsyncStorage.setItem(this.key, value)
    }

    async delete(): Promise<void> {
        await AsyncStorage.removeItem(this.key)
    }
}