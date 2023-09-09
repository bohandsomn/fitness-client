import { createSlice } from '@reduxjs/toolkit'
import { IErrorMessage, IGlobalState } from '@/entities/store'
import { CharacteristicPreviewDto } from '@/shared'
import { getManyTypesAction } from './asyncThunk'

const initialState: IGlobalState<CharacteristicPreviewDto[]> = {
    data: null,
    previous: null,
    error: null,
    isLoading: true,
}

const type = createSlice({
    name: 'type',
    initialState: initialState as IGlobalState<CharacteristicPreviewDto[]>,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getManyTypesAction.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(getManyTypesAction.fulfilled, (state, action) => {
                state.previous = state.data
                state.data = action.payload
                state.error = null
                state.isLoading = false
            })
            .addCase(getManyTypesAction.rejected, (state, action) => {
                state.data = null
                state.error = action.payload as IErrorMessage
                state.isLoading = false
            })
    }
})

export const typeReducer = type.reducer
