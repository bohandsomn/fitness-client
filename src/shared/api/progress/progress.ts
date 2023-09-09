import { IProgressApi } from './type'
import { HttpBuilder, INetworkHttp } from '../../network'
import { GetProgressInCaloriesDTO, ProgressInCaloriesDTO } from './dto'
import { apiUrl } from '../../config'
import { RelativePath } from '../constants'
import { getProgressInCaloriesDtoToBody } from './mapper'
import { ExceptionErrorResponseDto } from '../dto'

class ProgressApi implements IProgressApi {
    constructor(
        private readonly http: INetworkHttp,
    ) { }

    async getProgressInCalories(dto: Partial<GetProgressInCaloriesDTO>): Promise<ProgressInCaloriesDTO[] | ExceptionErrorResponseDto> {
        const query = getProgressInCaloriesDtoToBody(dto)
        return this.http.get({
            body: null,
            relativePath: '',
            query,
        })
    }
}

export const progressApi = new ProgressApi(
    new HttpBuilder()
        .setBaseURL(apiUrl)
        .setRelativePath(RelativePath.PROGRESS)
        .setSendAuthToken(true)
        .build()
)