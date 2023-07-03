import { ISetApi } from './type'
import { apiUrl } from '../../config'
import { HttpBuilder, INetworkHttp } from '../../network'
import { RelativePath } from '../constants'
import { ValidationErrorResponseDto, ExceptionErrorResponseDto } from '../dto'
import { AddExerciseToSetDto, CreateSetDto, GetSetDto, RemoveExerciseFromSetDto, SetDto, SetPreviewDto, UpdateSetDto } from './dto'
import { DeleteSetDto } from './dto/deleteSet.dto'

class SetApi implements ISetApi {
    constructor(
        private readonly http: INetworkHttp
    ) { }

    async createSet(dto: CreateSetDto): Promise<SetPreviewDto | ValidationErrorResponseDto<keyof CreateSetDto> | ExceptionErrorResponseDto> {
        return this.http.post({
            body: dto,
            relativePath: '',
        })
    }

    async updateSet(dto: UpdateSetDto): Promise<SetPreviewDto | ValidationErrorResponseDto<keyof UpdateSetDto> | ExceptionErrorResponseDto> {
        return this.http.put({
            body: dto,
            relativePath: '',
        })
    }

    async getSet(dto: GetSetDto): Promise<SetDto | ExceptionErrorResponseDto> {
        return this.http.get({
            body: null,
            relativePath: dto.id.toString()
        })
    }

    async getSets(): Promise<SetPreviewDto[] | ExceptionErrorResponseDto> {
        return this.http.get({
            body: null,
            relativePath: '',
        })
    }

    async getCommonSets(): Promise<SetPreviewDto[] | ExceptionErrorResponseDto> {
        return this.http.get({
            body: null,
            relativePath: 'common',
        })
    }

    async deleteSet(dto: DeleteSetDto): Promise<void | ExceptionErrorResponseDto> {
        return this.http.delete({
            body: null,
            relativePath: dto.id.toString()
        })
    }

    async addExerciseToSet(dto: AddExerciseToSetDto): Promise<void | ExceptionErrorResponseDto> {
        return this.http.patch({
            body: null,
            relativePath: ['add', dto.setId.toString(), 'exercise', dto.exerciseId.toString()]
        })
    }

    async removeExerciseFromSet(dto: RemoveExerciseFromSetDto): Promise<void | ExceptionErrorResponseDto> {
        return this.http.patch({
            body: null,
            relativePath: ['remove', dto.setId.toString(), 'exercise', dto.exerciseId.toString()]
        })
    }
}

export const setApi = new SetApi(
    new HttpBuilder()
        .setBaseURL(apiUrl)
        .setRelativePath(RelativePath.SET)
        .setSendAuthToken(true)
        .build()
)