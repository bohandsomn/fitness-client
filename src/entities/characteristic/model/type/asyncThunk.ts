import { typeApi } from '@/shared'
import { createCharacteristicAsyncThunk } from '../../lib'

export const getManyTypesAction = createCharacteristicAsyncThunk(typeApi)
