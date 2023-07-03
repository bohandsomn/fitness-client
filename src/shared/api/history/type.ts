import { ExceptionErrorResponseDto, ValidationErrorResponseDto } from '../dto'
import { GetUserHistoryDto, HistoryDto, PushHistoryDto } from './dto'

export interface IHistoryApi {
    pushHistory(dto: PushHistoryDto): Promise<void | ValidationErrorResponseDto<keyof PushHistoryDto> | ExceptionErrorResponseDto>
    getUserHistory(dto: GetUserHistoryDto): Promise<HistoryDto | ValidationErrorResponseDto<keyof GetUserHistoryDto> | ExceptionErrorResponseDto>
}