import { checkEnv } from './checkEnv'

export const apiUrl = checkEnv(process.env.API_URL)
