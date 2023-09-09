import { ExceptionErrorResponseDto, ValidationErrorResponseDto } from '@/shared'

interface IGlobalStateSuccess<Data> {
    data: Data
    previous: Data | null
    error: null
    isLoading: false
}

interface IGlobalStatePending<Data> {
    data: Data | null
    previous: Data | null
    error: null
    isLoading: true
}

interface IGlobalStateFail<Data> {
    data: null
    previous: Data | null
    error: IErrorMessage
    isLoading: false
}

export type IErrorMessage = ValidationErrorResponseDto<string>['message'] | ExceptionErrorResponseDto['message']

export type IGlobalState<Data> = IGlobalStateSuccess<Data> | IGlobalStatePending<Data> | IGlobalStateFail<Data>