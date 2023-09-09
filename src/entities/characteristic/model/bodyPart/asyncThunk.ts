import { bodyPartApi } from '@/shared'
import { createCharacteristicAsyncThunk } from '../../lib'

export const getManyBodyPartsAction = createCharacteristicAsyncThunk(bodyPartApi)
