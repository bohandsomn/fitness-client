import { createSlice } from '@reduxjs/toolkit'
import { IErrorMessage, IGlobalState } from '@/entities/store'
import { CharacteristicPreviewDto } from '@/shared'
import { getManyBodyPartsAction } from './asyncThunk'

const initialState: IGlobalState<CharacteristicPreviewDto[]> = {
    data: null,
    previous: null,
    error: null,
    isLoading: true,
}

const bodyPart = createSlice({
    name: 'body-part',
    initialState: initialState as IGlobalState<CharacteristicPreviewDto[]>,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getManyBodyPartsAction.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(getManyBodyPartsAction.fulfilled, (state, action) => {
                state.previous = state.data
                state.data = action.payload
                state.error = null
                state.isLoading = false
            })
            .addCase(getManyBodyPartsAction.rejected, (state, action) => {
                state.data = null
                state.error = action.payload as IErrorMessage
                state.isLoading = false
            })
    }
})

export const bodyPartReducer = bodyPart.reducer
