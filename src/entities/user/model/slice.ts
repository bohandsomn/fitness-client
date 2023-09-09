import { createSlice } from '@reduxjs/toolkit'
import { UserPayloadDto } from '@/shared'
import { autoLogInUserAction, logInUserAction, logOutUserAction, registerUserAction, updateUserAction } from './asyncThunk'
import { IErrorMessage, IGlobalState } from '../../store'

const initialState: IGlobalState<UserPayloadDto> = {
    data: null,
    previous: null,
    error: null,
    isLoading: true,
}

const user = createSlice({
    name: 'user',
    initialState: initialState as IGlobalState<UserPayloadDto>,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUserAction.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(registerUserAction.fulfilled, (state, action) => {
                state.previous = state.data
                state.data = action.payload
                state.error = null
                state.isLoading = false
            })
            .addCase(registerUserAction.rejected, (state, action) => {
                state.data = null
                state.error = action.payload as IErrorMessage
                state.isLoading = false
            })

            .addCase(logInUserAction.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(logInUserAction.fulfilled, (state, action) => {
                state.previous = state.data
                state.data = action.payload
                state.error = null
                state.isLoading = false
            })
            .addCase(logInUserAction.rejected, (state, action) => {
                state.data = null
                state.error = action.payload as IErrorMessage
                state.isLoading = false
            })

            .addCase(autoLogInUserAction.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(autoLogInUserAction.fulfilled, (state, action) => {
                state.previous = state.data
                state.data = action.payload
                state.error = null
                state.isLoading = false
            })
            .addCase(autoLogInUserAction.rejected, (state, action) => {
                state.data = null
                state.error = action.payload as IErrorMessage
                state.isLoading = false
            })

            .addCase(updateUserAction.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(updateUserAction.fulfilled, (state, action) => {
                state.previous = state.data
                state.data = action.payload
                state.error = null
                state.isLoading = false
            })
            .addCase(updateUserAction.rejected, (state, action) => {
                state.data = null
                state.error = action.payload as IErrorMessage
                state.isLoading = false
            })

            .addCase(logOutUserAction.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(logOutUserAction.fulfilled, (state) => {
                state.previous = state.data
                state.data = null
                state.error = null
                state.isLoading = false
            })
            .addCase(logOutUserAction.rejected, (state, action) => {
                state.data = null
                state.error = action.payload as IErrorMessage
                state.isLoading = false
            })
    }
})

export const userReducer = user.reducer
