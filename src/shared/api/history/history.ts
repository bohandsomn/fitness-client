import { IHistoryApi } from './type'
import { apiUrl } from '../../config'
import { HttpBuilder, INetworkHttp } from '../../network'
import { RelativePath } from '../constants'
import { ValidationErrorResponseDto, ExceptionErrorResponseDto } from '../dto'
import { GetUserHistoryDto, HistoryDto, PushHistoryDto } from './dto'

class HistoryApi implements IHistoryApi {
    constructor(
        private readonly http: INetworkHttp
    ) { }

    async pushHistory(dto: PushHistoryDto): Promise<void | ValidationErrorResponseDto<'exerciseId'> | ExceptionErrorResponseDto> {
        return this.http.patch({
            body: dto,
            relativePath: ''
        })
    }

    async getUserHistory(dto: GetUserHistoryDto): Promise<HistoryDto | ValidationErrorResponseDto<'date'> | ExceptionErrorResponseDto> {
        return this.http.get({
            body: dto,
            relativePath: ''
        })
    }
}

export const historyApi = new HistoryApi(
    new HttpBuilder()
        .setBaseURL(apiUrl)
        .setRelativePath(RelativePath.HISTORY)
        .setSendAuthToken(true)
        .build()
)