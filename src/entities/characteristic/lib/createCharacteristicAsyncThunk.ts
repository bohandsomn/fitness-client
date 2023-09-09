import { createAsyncThunk } from '@reduxjs/toolkit'
import { CharacteristicTypePrefix } from '../model/typePrefix'
import { CharacteristicPreviewDto, ExceptionErrorResponseDto, ICharacteristicApi } from '@/shared'

type RejectWithValue = ReturnType<Parameters<Parameters<typeof createAsyncThunk>[1]>[1]['rejectWithValue']>

export function createCharacteristicAsyncThunk(api: ICharacteristicApi) {
    const getManyAction = createAsyncThunk(
        CharacteristicTypePrefix.GET_MANY,
        async (_: void, thunkAPI): Promise<CharacteristicPreviewDto[] | RejectWithValue> => {
            const response = await api.getCharacteristics()
            if (
                ExceptionErrorResponseDto.isExceptionErrorResponse(response)
            ) {
                return thunkAPI.rejectWithValue(response.message)
            }
            return response
        }
    )
    return getManyAction
}
