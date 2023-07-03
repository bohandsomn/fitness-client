import { createAsyncThunk } from '@reduxjs/toolkit'
import { userApi, authApi, RegisterDto, ValidationErrorResponseDto, ExceptionErrorResponseDto, UserPayloadDto, LogInDto, UpdateUserDto } from '@/shared'
import { UserTypePrefix } from './typePrefix'

type RejectWithValue = ReturnType<Parameters<Parameters<typeof createAsyncThunk>[1]>[1]['rejectWithValue']>

export const registerUserAction = createAsyncThunk(
    UserTypePrefix.REGISTER,
    async (dto: RegisterDto, thunkAPI): Promise<UserPayloadDto | RejectWithValue> => {
        const response = await authApi.register(dto)
        if (
            ValidationErrorResponseDto.isValidationErrorResponse<keyof RegisterDto>(response) ||
            ExceptionErrorResponseDto.isExceptionErrorResponse(response)
        ) {
            return thunkAPI.rejectWithValue(response.message)
        }
        return response
    }
)

export const logInUserAction = createAsyncThunk(
    UserTypePrefix.LOG_IN,
    async (dto: LogInDto, thunkAPI): Promise<UserPayloadDto | RejectWithValue> => {
        const response = await authApi.logIn(dto)
        if (
            ValidationErrorResponseDto.isValidationErrorResponse<keyof LogInDto>(response) ||
            ExceptionErrorResponseDto.isExceptionErrorResponse(response)
        ) {
            return thunkAPI.rejectWithValue(response.message)
        }
        return response
    }
)

export const autoLogInUserAction = createAsyncThunk(
    UserTypePrefix.AUTO_LOG_IN,
    async (dto: void, thunkAPI): Promise<UserPayloadDto | RejectWithValue> => {
        const response = await authApi.autoLogIn()
        if (
            ExceptionErrorResponseDto.isExceptionErrorResponse(response)
        ) {
            return thunkAPI.rejectWithValue(response.message)
        }
        return response
    }
)

export const logOutUserAction = createAsyncThunk(
    UserTypePrefix.LOG_OUT,
    async (dto: void, thunkAPI): Promise<void | RejectWithValue> => {
        const response = await authApi.logOut()
        if (
            ExceptionErrorResponseDto.isExceptionErrorResponse(response)
        ) {
            return thunkAPI.rejectWithValue(response.message)
        }
    }
)

export const updateUserAction = createAsyncThunk(
    UserTypePrefix.UPDATE,
    async (dto: UpdateUserDto, thunkAPI): Promise<UserPayloadDto | RejectWithValue> => {
        const response = await userApi.updateUser(dto)
        if (
            ValidationErrorResponseDto.isValidationErrorResponse<keyof UpdateUserDto>(response) ||
            ExceptionErrorResponseDto.isExceptionErrorResponse(response)
        ) {
            return thunkAPI.rejectWithValue(response.message)
        }
        return response
    }
)