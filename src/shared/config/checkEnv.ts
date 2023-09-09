import { Exception } from '../exception'

export function checkEnv(data: unknown): string {
    if (typeof data === 'string') {
        return data
    }
    throw new Exception(`Env ${data} is not a string`)
}