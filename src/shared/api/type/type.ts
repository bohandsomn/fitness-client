import { CharacteristicPreviewDto, GetCharacteristicDTO, GetCharacteristicsByExerciseDTO, ICharacteristicApi } from '../characteristic'
import { RelativePath } from '../constants'
import { apiUrl } from '../../config'
import { HttpBuilder, INetworkHttp } from '../../network'

class TypeApi implements ICharacteristicApi {
    constructor(
        private readonly http: INetworkHttp
    ) { }

    async getCharacteristic(dto: GetCharacteristicDTO): Promise<CharacteristicPreviewDto> {
        return this.http.get({
            body: null,
            relativePath: dto.id.toString()
        })
    }

    async getCharacteristics(): Promise<CharacteristicPreviewDto[]> {
        return this.http.get({
            body: null,
            relativePath: '',
        })
    }

    async getCharacteristicsByExercise(dto: GetCharacteristicsByExerciseDTO): Promise<CharacteristicPreviewDto[]> {
        return this.http.get({
            body: null,
            relativePath: ['exercise', dto.exerciseId.toString()],
        })
    }
}

export const typeApi = new TypeApi(
    new HttpBuilder()
        .setBaseURL(apiUrl)
        .setRelativePath(RelativePath.TYPE)
        .build()
)