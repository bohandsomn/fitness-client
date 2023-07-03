import { IExerciseApi } from './type'
import { ExerciseDto, GetExerciseDto, GetExercisesDto, ExercisePayloadDto } from './dto'
import { RelativePath } from '../constants'
import { apiUrl } from '../../config'
import { HttpBuilder, INetworkHttp } from '../../network'

class ExerciseApi implements IExerciseApi {
    constructor(
        private readonly http: INetworkHttp
    ) { }

    async getExercise(dto: GetExerciseDto): Promise<ExerciseDto> {
        return this.http.get({
            body: null,
            relativePath: dto.exerciseId.toString()
        })
    }

    async getExercises(dto?: GetExercisesDto): Promise<ExercisePayloadDto[]> {
        return this.http.get({
            body: null,
            relativePath: '',
            query: dto
        })
    }
}

export const exerciseApi = new ExerciseApi(
    new HttpBuilder()
        .setBaseURL(apiUrl)
        .setRelativePath(RelativePath.EXERCISE)
        .setSendAuthToken(true)
        .build()
)