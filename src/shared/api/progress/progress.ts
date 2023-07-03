import { IProgressApi } from './type'
import { HttpBuilder, INetworkHttp } from '../../network'
import { GetProgressInCaloriesDTO, ProgressInCaloriesDTO } from './dto'
import { apiUrl } from '../../config'
import { RelativePath } from '../constants'

class ProgressApi implements IProgressApi {
    constructor(
        private readonly http: INetworkHttp,
    ) { }

    async getProgressInCalories(dto: GetProgressInCaloriesDTO): Promise<ProgressInCaloriesDTO[]> {
        return this.http.get({
            body: dto,
            relativePath: ''
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